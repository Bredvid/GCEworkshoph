# Workshop i Google Cloud Engine

For å få en konto til å logge seg inn, 
```bash
ssh bredvid@bastion.bredvid.io
```

Du vil få to nøkler du må lagre i to filer. id_rsa og id_rsa_pub, sammen med et brukernavn

Bruk dette for å logge deg på -

```bash
ssh -i ./id_rsa brukernavn@bastion.bredvid.io
```

---

## Creating an instance
[https://cloud.google.com/sdk/gcloud/reference/compute/instances/create]

bruk følgende config: 
navnet må være unikt. for enkelhetsskyld bruk brukernavnet ditt. 
zone: "us-east1-b" 
machine-type: "f1-micro"
network: "default" 
tags: "workshop
image-project: ubuntu-os-cloud
image-family: "ubuntu-1704"
Om dere liker enannen distro enn ubuntu, kan dere velge en annen fra: [https://cloud.google.com/compute/docs/images]

## connecting to an instance: 

[https://cloud.google.com/sdk/gcloud/reference/compute/ssh]]


For tilgang via ssh ut av boksen kan dere settee: 
metadata: '{"sshKeys":"workshop:{din public nøkkel fra id_rsa.pub} workshop"}'

Du kan da logge på med ssh workshop@navnpåboks


##Deleting an instanceBruk
[https://cloud.google.com/sdk/gcloud/reference/compute/instances/delete]



#Ansible 
Getting started: 
[http://docs.ansible.com/ansible/latest/intro_getting_started.html]

Alle moduler:
[http://docs.ansible.com/ansible/latest/list_of_all_modules.html]

## Nyttige moduler
lag instanser i gce: [http://docs.ansible.com/ansible/latest/gce_module.html]
opprett filer og kataloger: [http://docs.ansible.com/ansible/latest/file_module.html]
legg til i filer: [http://docs.ansible.com/ansible/latest/lineinfile_module.html]
bruk en template for å kopiere ut en fil [http://docs.ansible.com/ansible/latest/template_module.html]
kopiere ut en fil [http://docs.ansible.com/ansible/latest/copy_module.html]
legge til pakker  [http://docs.ansible.com/ansible/latest/apt_module.html]

## Info om ansible

Intro til inventory: http://docs.ansible.com/ansible/latest/intro_inventory.html


### backup nøkkel:
workshop02@bastion.bredvid.io

-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA6qJePt7SrWtGwS7Gx5kpdP6ZexKgW+M0oQAIWDsYKUwqKhKY
Q/bKMHkQ0f936ceG7k4VniTTYa3Gvz/FqlMTwDG8N3vsyOYOQPLz20qA6Vvj/5v2
n8/z8DjgEs9uQRLh3dGGxhIFB08JUj4W7VQzCtY4n8dRIg0upVifbHzXN8h2hHFb
sMVbjiRqGA9ASrkZO96fvDyOWNuwz7YOXDWKCZ2En3WhWBuUv+kJiIxNaQK/v4kO
j0Z00aqlsLORi39EewG6zabSr6h2VackGJqZ1IKmxrMww+FY4txZ6BBnfxhJWchK
H9EFVvEVPd/LMoLgBWBdqXXiqfC8PoNeWJeVgQIDAQABAoIBAQCRZfTJOQOM+8Fo
zTfZUIxkN7GclrpQtsdSTdbd9iDO1qf6UnORCknZJ+zIdWs1r7Np0XGMAn4LNcjH
kxlGpxzCKQ/dwinFhOqoTOXYqp6f/ZWYPGnkNtWPs28HuQs1wCG/d6vw6hG7qbq5
AEjs4RSQTpfgS393fnu9cuG4NNSZd6wdXYE72LjB+oxAHRosfxc8/OsBwGBHofL0
vvp4bVM6TXnyFgzH6MI59SZb2Lx0ez5OnOJLcDYLRmAT9kgTOrwSFEwGdopKpJZX
TAMrPP76cG7nIvUrK14BWBEfQWTQpwY/8YyOufeoQ9rfI39MCHQ96rY/DrKsiUE1
GwJ3c0ABAoGBAP7l9ek9QbHXsR9gjDvqc3w4iD0tivlEIZnLgUT0VwVF0JEdPed/
KrmUiHXUQRoioTprW0roJdbKMYZlSkerLF3zAGbQB38OZT8dztqjeE4rkMkbXdRU
MzPfiVz77YYie22d2aSaQ3V5seIvdP6pO71pHRzlweOd06zTLynD+y/BAoGBAOul
/GBQTYymHazvRvFA7DSTQl1sDaBtZCsyL0uDzs/0vKlH3zsvHQSawJ2uzYFn99sL
pH4IyqChJrN2vVpBiDumPBbULeIVNGIvFKjSjTcQQEyDgioyNGCwyPMkwGSjqtvx
PIFDDBJoz4f1fZfqyGgi41ZJSDhDYi/HiTVYvdXBAoGBAM6XmYkR4fX/SIqS2PYS
3sj2lM1o5TOEmespurslgoY+gH2tAqhnNDy3eyZtAtro6F4N9y8uGsUMmblAzURr
Iwl+U3wA7aJ4C21tfmNMjMxmmPG2YYUfPWS0r4OSmH/X4MwGXQkBEt3a5Wbaaeuh
RE8PK85pFY2jNJXlkFs8gZDBAoGABusEkb9Jx4tI677KkmKZjKGWHTAC5mbPvgTn
JoxkEe7Zaw7VGuOzMmNorDhpiBcJS8D3v0t6x2RzwmkF/hRWb4nd0b3A6xY8R3Wi
YaJsyuULPjPOKnb22q/V9m1pyIqVhYd7gz/4psG09gTa/w7Be20qx2m3WQ+BXm25
NXu5dwECgYA7KSFXFQ8zKgn2ju8eloyT3K5zSZiQo3l10sOsmzXUAITWWLuYLAFK
uZWeE8ued15AFf80+12I7+84j+jEk6t2O4cy/jYnF9sPk91wyHFCFm+WjhiOrcoq
Uqk18v1qOIuCo0cIn5I6nfSzBM4bMBCBusGyM3XR2hA94l2NoZWqyQ==
-----END RSA PRIVATE KEY-----

