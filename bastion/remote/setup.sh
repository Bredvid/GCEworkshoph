#!/bin/bash

eval `ssh-agent -s`
chmod 400 ~/.ssh/id_rsa_git
ssh-keygen -t rsa -N "" -f .ssh/id_rsa
ssh-add .ssh/id_rsa
ssh-add .ssh/id_rsa_git

sudo apt-key add bredvid.pub
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install -y git ansible python-libcloud


git clone git@github.com:Bredvid/GCLworkshop.git workshop

cd workshop/ansible
chmod u+x inventory/gce.py
anible-playbook -i inventory/ -v bastion.yml