# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import os

version = '0.0.1'

setup(
    name='quizapp',
    version=version,
    description='This app is ment for conducting an online quiz of employees',
    author='Ravindra',
    author_email='ravindra_l@indictranstech.com',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=("frappe",),
)
