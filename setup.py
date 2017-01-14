from setuptools import setup, find_packages


setup(
    name="nino",
    version='1.0',
    packages=find_packages(),
    install_requires=['logbook', 'tornado', 'flask', 'click', 'ujson'],
    entry_points={
        'console_scripts': [
            'ninod = nino.run_server:main'
        ]
    }
)
