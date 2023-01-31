from os import listdir
from os.path import isfile, join

path = './assets/imgs/sponsors/'

for dir in listdir(path):
  folder = join(path, dir)
  if not isfile(folder):
    for file in listdir(folder):
      finalDestination = folder + '/' + file
      print('{\nname: "' + file + '",\nlink: "",\nimg: "' + finalDestination + '",\ntype: "' + dir + '"\n},')
    print('*' * 50)