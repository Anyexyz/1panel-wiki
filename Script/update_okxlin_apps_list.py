import os
import yaml

def read_data_yml(file_path):
    with open(file_path, 'r') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)
    return data

def write_data_to_md(data, md_file):
    with open(md_file, 'w') as f:
        f.write('# 应用列表\n\n')
        f.write('|应用|图标|描述|类型|\n')
        f.write('|:---:|:---:|:---:|:---:|\n')
        for app in data:
            f.write(f'|[{app.get("name", "")}]({app.get("additionalProperties", {}).get("website", "")})|<img src="{app.get("logo", "")}" alt="logo" width="50px">|{app.get("description", "")}|{app.get("type", "")}|\n')

def main():
    apps_dir = 'appstore/apps'
    md_file = '../src/thirdStores/okxlin/app_list.md'
    data = []
    for app in os.listdir(apps_dir):
        app_dir = os.path.join(apps_dir, app)
        if os.path.isdir(app_dir):
            data_yml = os.path.join(app_dir, 'data.yml')
            if os.path.exists(data_yml):
                app_data = read_data_yml(data_yml)
                app_data['logo'] = f'https://mirror.ghproxy.com/https://raw.githubusercontent.com/okxlin/appstore/localApps/{app_dir.replace("appstore/","")}/logo.png'                
                data.append(app_data)
    write_data_to_md(data, md_file)

if __name__ == '__main__':
    os.system('git clone https://github.com/okxlin/appstore.git')
    main()