# Updating Packages

- A *Question* arise, **Why exactly do i Need to update my npm packages?**
- The *Answer* is, Dependencies can become outdated over the period of time due to bug fixies, and new features uploaded on them and such updates leads to better performance and security of the application.

- There is **serious** vulnerability issues arise when we use outdated packages in our application and it posses some serious *threat* to our app. And up-to-date packages prevent vulnerabilities.

- Following resoures are used to update npm packages.
    
    - Before updating any dependencies you could check how many packages are outdated by running command like `**npm outdated**` this will show you the list of outdated packages and their current and latest version.

    - Now, if you want to update those packages to latest version, you just need to run the command `npm update`. (Keep in mind that this command will not update to it's beta version or anything like that but latest stable version.)

    - But if you want *the latest* version that you have to include `@latest` in the command like this : `npm update react@latest`


    **1**. How to update npm Dependencies.
    -  You can go in package.json file and check how many packages you have installed. and in terminal to that directory you can run command `**npm install <package_name>@latest**` to update the package to latest version.

    **Trick**  : If you want to update globaly in you pc/laptop.
    - Then you have to run the command in terminal `npm install -g npm-check-updates` and then run `ncu `. (`ncu` command is very similar to `npm outdated`.)
    - And if you want to upgrade the dependencies then run `ncu -u` OR `ncu --upgrade`.

    - Here if you find list of dependencies that you want to update and some not then there is _interactive mode_ as well. 
        - In which you have to run command instead of `ncu -u`, you can run `ncu -i` OR `ncu --interactive`. 
        - In which you can navigate through which dependencies you want to update and which not.(space to deselect and enter to upgrade.)

        - Now, withing the interactive mode there is another command : `ncu --interactive --format group`. This command will group the dependencies by their type like `major`, `minor` and `patch` releases.


    **2**. How to update npm DevDependencies.
    - There is offical npm doc about getting step-by-step procedures on how to update any kind of dependencies. 
    - [npm doc](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)