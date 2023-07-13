@echo off
FOR /F "tokens=*" %%g IN ('npm pkg get version') do (SET version=%%g)
@echo on

docker build -t retlok/cookingwebsite:%version% -t retlok/cookingwebsite:latest ./
docker push retlok/cookingwebsite:%version%
docker push retlok/cookingwebsite:latest
