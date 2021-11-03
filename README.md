# Join-DT
WebdriverIO is an open source automation framework built to automate web and mobile applications. It helps to interact with you app and provides a set of plugins which allows to develop robust and scalable test suite.

**Prerequisites:** 
1.	Install Android SDK: If you don’t have installed Android SDK in your system than navigate to https://developer.android.com/studio and choose “Download android studio”. This will first install the android studio and following AVD Manager setup will allow to install the Android SDK and emulator related dependencies.
![Demo report](https://imgur.com/2xOlMYw.png)
 
2.	Install Visual Studio Code: If you don’t have Visual Studio Code on your system than navigate to https://code.visualstudio.com/download download and install.
![Demo report](https://imgur.com/4bv03EQ.png)

 

Follow the given steps to setup this project in your system

**Step 1: Create a Project folder**
The first step is to create a new folder on your computer on a desired location.

**Step 2: Clone the Join-DT GitHub repository into the project folder**
Login into GitHub and go to the Join-DT repository https://github.com/FaberODT/Join-DT , click on “Clone” button and copy clone URL. 
 ![Demo report](https://imgur.com/l9WeffV.png)
After copying the clone URL, open the GitBash/CMD and change working directory to the project folder. After that apply the following command in order to clone the project.

```Git clone https://github.com/FaberODT/Join-DT.git```

The above command will clone the entire project in your Project Folder.

**Step 3: Open the project folder in Visual Studio Code**
-	Open, Visual Studio Code, Click on File > Open Folder
-	Choose Folder and Click on Select Folder at the bottom

**Step 4: Install all the project dependencies**
Open Terminal, In Visual Studio Code by clicking on Terminal Menu > Choose New Terminal.
Note: Ensure New Terminal opened in the working directory.
-	New Terminal window appears at the bottom of Visual Studio Code, In the new terminal type below command

```npm install```

The above command will install all the dependencies mentioned in the pacakge.json file.

**Run automation test cases locally or on Kobiton devices**

**1.	Run test cases locally**
In order to run test cases locally on your system make sure android device/emulator is attached with your system. After that run the following command in Visual Studio Code terminal,

```npm test```

The above command will start executing the automation test cases in your desired device/emulator

**2.	Run test cases on Kobiton device**
Run the following command in Visual Studio Code terminal, the below command will run your automation test cases on Kobiton’s Android device.

```npm run android```

**Note: before running the automation code on kobiton, make sure mentioned device is available/online. **
For device’s name and configuration check the “conf>>kobitonAndroidWeb.conf.js” file, as showing in below,
 ![Demo report](https://imgur.com/9l7feR0.png)
In the above image file name mentioned in the “config.specs” attribute, all the automation test cases mentioned in that file will get executed.
Same way, you can also run the test cases on Kobiton’s iOS devices too, run the following command in Visual Studio Code terminal and for configuration settings check “conf>>kobitoniOSWeb.conf.js” file.

```npm run iOS```
