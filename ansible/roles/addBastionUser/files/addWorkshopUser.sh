#!/bin/bash

echo "Velkommen til workshop med bredvid. \n\n Du vil nå bli tildelt en bruker. Kopier privatnøkkelen til id_rsa_bredvid i ~/.ssh, og bruk denne til å koble opp med tildelt bruker."

echo  hello
unset user
read user
echo $user [ "$user" =~ "^[1-9]+" ]
if ! [[ "$user"  =~ ^[a-z1-9]{5,20}$ ]]; then
        echo "Not a valid username. Should be between 5 and 20 characters, and only yse a-z 0-9"
        exit 1
fi

sudo useradd "$user" -m
sudo su - -c 'mkdir .ssh && chmod 700 .ssh' $user
sudo su - -c 'ssh-keygen -t rsa -N "" -f .ssh/id_rsa ' $user
sudo echo "$(sudo su - -c 'cat .ssh/id_rsa' $user)"
sudo echo "$(sudo su - -c 'cat .ssh/id_rsa.pub' $user)"
sudo echo /home/$user/.ssh/id_rsa.pub


echo "hello '$user'"