#!/bin/bash
set -x

if ! [ -f "./remote/workshopadmin.json" ]; then
    gcloud iam service-accounts keys create   ./remote/workshopadmin.json  --iam-account workshopadmin@bredvid-gcl-workshop.iam.gserviceaccount.com
fi
gcloud compute --project bredvid-gcl-workshop instances create "bastion" --zone "us-east1-b" --machine-type "f1-micro" --image-project ubuntu-os-cloud --image-family "ubuntu-1704" --network "default" --maintenance-policy "MIGRATE" --scopes "https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/compute","https://www.googleapis.com/auth/devstorage.full_control","https://www.googleapis.com/auth/cloud.useraccounts" --tags "workshop,admin"
sleep 10s
gcloud compute --project bredvid-gcl-workshop copy-files --zone "us-east1-b" ./remote/* bastion:~/
gcloud compute --project bredvid-gcl-workshop copy-files --zone "us-east1-b" ./remote/.ssh/* bastion:~/.ssh/
gcloud compute --project bredvid-gcl-workshop ssh "bastion" --zone "us-east1-b"
