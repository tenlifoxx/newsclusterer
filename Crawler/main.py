import requests
from bs4 import BeautifulSoup


def urlList(press): ### 크롤링 할 언론사 URL 리스트 생성
    url_list = []
    for p in press:
        url_list.append()



def makeUrl(officeId):  ### 네이버 뉴스 랭킹에서 언론사별 URL 생성
    url = "https://news.naver.com/main/ranking/office.naver?"
    params = {
        "officeId": officeId
    }
    raw = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, params=params)

    return raw.text


def crawlFromUrl(url):
    html = BeautifulSoup(url, "html.parser")


def newPageList(press):
    pass


press_no = {'중앙': '025', 'JTBC': '437', 'YTN': '052', '연합': '001', 'SBS': '055',
            'KBS': '056', 'MBC': '214', '한겨레': '028', '경향': '032', '조선': '023'}