### Selenium Imports (WebScraper)
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

### Data Frame Imports
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import json

def getMastersData():
    jsonObject = {}

    # Open a Chrome browser in incognito mode
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--incognito")
    driver = webdriver.Chrome(
        executable_path="/Users/davidgan/chromedriver", options=chrome_options)
    driver.get("https://www.augusta.com/masters/leaderboard")
    time.sleep(3)
    rows = driver.find_elements(By.CLASS_NAME, 'odd')
    for row in rows:
        # print(row.text)
        playerData = {}
        for itemIdx, item in enumerate(row.find_elements_by_tag_name('td')):
            #print(itemIdx, item.text)
            if itemIdx == 0:
                #print("position")
                playerData["position"] = item.text
            elif itemIdx == 1:
                #print("player name")
                playerData["name"] = item.text
            elif itemIdx == 2:
                #print("total")
                playerData["total"] = int(item.text) if item.text else "n/a"
            elif itemIdx == 3:
                #print("thru)
                playerData["thru"] = item.text
            elif itemIdx == 4:
                #print("today score")
                playerData["today"] = int(item.text) if item.text else "n/a"
            elif itemIdx == 5:
                #print("r1 score")
                playerData["r1"] = int(item.text) if item.text else "n/a"
            elif itemIdx == 6:
                #print("r2 score")
                playerData["r2"] = int(item.text) if item.text else "n/a"
            elif itemIdx == 7:
                #print("r3 score")
                playerData["r3"] = int(item.text) if item.text else "n/a"
            elif itemIdx == 8:
                #print("r4 score")
                playerData["r4"] = int(item.text) if item.text else "n/a"
            elif itemIdx == 9:
                #print("total")
                playerData["total"] = int(item.text) if item.text else "n/a"
        #print(playerData)
        jsonObject[playerData["name"]] = playerData
    
    json_object = json.dumps(jsonObject, indent = 4)
    print(json_object)
    
    
    
    return

getMastersData()

def getData():

    # Open a Chrome browser in incognito mode
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--incognito")
    driver = webdriver.Chrome(
        executable_path=PATH2CHROMEDRIVER, options=chrome_options)
    driver.get("https://www.masterworks.io/")

    tradingLink = driver.find_element_by_xpath(
        "/html/body/div[1]/div/div/div[1]/nav/ul/li[4]/a")
    tradingLink.click()
    time.sleep(3)

    # Find the Table and the Next button
    rightBtn = driver.find_element_by_xpath(
        "/html/body/div[1]/div[2]/div/div/div/div/div[2]/div/div/div[3]/div[2]/button")
    isBtnEnabled = rightBtn.is_enabled()
    isBtnEnabled = True
    #transactionTable = driver.find_element_by_xpath("/html/body/div[1]/div[2]/div/div/div/div/div[2]/div/div/div[2]/table")
    transactionTableBody = driver.find_element_by_xpath(
        "/html/body/div[1]/div[2]/div/div/div/div/div[2]/div/div/div[2]/table/tbody")

    print("is the right button enabled?: ", isBtnEnabled)
    print("found a transaction table: ", transactionTableBody is not None)

    pageCount = 0

    # Loop Through the Table
    #while isBtnEnabled and pageCount < 5:
    for i in range(1000):
        print("A")

        tbody = driver.find_element_by_xpath(
            "/html/body/div[1]/div[2]/div/div/div/div/div[2]/div/div/div[2]/table/tbody")
        print("tbody: ", tbody)
        #for row in transactionTableBody.find_elements_by_tag_name('tr'):
        for row in tbody.find_elements_by_tag_name('tr'):
            pageCount += 1
            for itemIdx, item in enumerate(row.find_elements_by_tag_name('td')):
                #                 print("itemIdx: ", itemIdx)
                #                 print("item: ", item.text)

                # 0 - The Mosque Jean-Michel Basquiat (Masterworks 006)
                if itemIdx == 0:
                    nameComps = str(item.text).split('\n')
                    #print("nameComps: ", nameComps)
                    paintingName = nameComps[0]
                    #print("paintingName: ", paintingName)
                    painterIntermString = nameComps[1]
                    painterIntermArray = painterIntermString.split("(")
                    painterName = painterIntermArray[0]
                    mwIDString = painterIntermArray[1].split(" ")[1][:-1]
                    #print("painterName: ", painterName)
                    #print("mwIDString: ", mwIDString)

                    dataDic["painting"].append(paintingName)
                    dataDic["artist"].append(painterName)
                    dataDic["mwID"].append(mwIDString)

                    print("on row: ", paintingName)

                elif itemIdx == 1:
                    dataDic["sharesTraded"].append(int(item.text))
                elif itemIdx == 2:
                    dataDic["price"].append(float(str(item.text)[1:]))
                elif itemIdx == 3:
                    dataDic["percentChange"].append(float(str(item.text)[:-1]))



        if not rightBtn.is_enabled():
            break
        rightBtn.click()
        time.sleep(2)
        pageCount += 1

    #driver.quit()
    #return
