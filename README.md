# create app
## create react app

```
create-react-app app --typescript
rm -rf app/node_modules
cp -p app/* .
rm -rf app
```

## git init
```
git init
git commit -m "create react app"
git remote add origin git@github.com:ham0215/marunouchi_lunch.git
git push -u origin master
```