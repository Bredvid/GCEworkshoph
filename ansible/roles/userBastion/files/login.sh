#!/bin/bash

printf "Velkommen til workshop med Bredvid. \n\n Du vil nå bli tildelt en bruker. Kopier privatnøkkelen til id_rsa_bredvid i ~/.ssh, og bruk denne til å koble opp med tildelt bruker."

usernum=$(flock --exclusive --wait 5 counter.txt sh -c 'read count < counter.txt ; echo $((count + 1)) > counter.txt ; echo $((count + 1))')
username=$(printf "workshop%02d\n" $usernum)
echo "Ditt brukernavn er: $username"
echo "Dette er din private nøkkel. paste i .ssh/id_rsa_bredvid"
echo "$(cat keys/$username/id_rsa)"
printf "\n\nDette er din offentlige nøkkel. paste i .ssh/id_rsa_bredvid.pub\n"
echo "$(cat keys/$username/id_rsa.pub)"
echo /home/$user/.ssh/id_rsa.pub

printf "\n\nFor login: 'ssh -i ~/.ssh/id_rsa_bredvid $username@bastion.ws.bredvid.io'\n"