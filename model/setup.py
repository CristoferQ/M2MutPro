from distutils.core import setup
import os

class SetupConfiguration:

    def __init__(self):

        self.setupInstall()

    def setupInstall(self):

        setup(name='M2MutPro',
            version='1.0',
            description='M2MutPro',
            author='Cristofer Quiroz',
            author_email='ceql@live.cl',
            license='Open GPL 3',
            packages=['modules', 'modules.database', 'modules.dataset', 'modules.services', 'modules.utils','modules.results'])

def main():

    setup = SetupConfiguration()
    return 0

if __name__ == '__main__':
    main()