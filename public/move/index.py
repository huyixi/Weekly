import os
import shutil

# 获取当前目录下的所有文件名
files = [f for f in os.listdir('.') if os.path.isfile(f)]

# 遍历所有文件
for file in files:
    # 获取文件名和扩展名
    file_name, file_extension = os.path.splitext(file)
    
    # 创建同名文件夹
    if not os.path.exists(file_name):
        os.mkdir(file_name)
    
    # 移动文件到同名文件夹，并重命名为index
    shutil.move(file, os.path.join(file_name, 'index' + file_extension))

print("所有文件已成功移动并重命名。")
