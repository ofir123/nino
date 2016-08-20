from setuptools import setup, find_packages

REQUIRES = ['flask', 'tornado', 'ujson']

setup(
    name="nino",
    version='1.0',
    packages=find_packages(),
    install_requires=REQUIRES
)
