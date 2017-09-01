#!/bin/bash
set -x
gcloud compute --project bredvid-gcl-workshop instances $1 "bastion" --zone "us-east1-b"
