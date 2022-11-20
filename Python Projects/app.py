
# from twitter_scraper_selenium import scrape_profile

# bbcbangla = scrape_profile(twitter_username="bbcbangla",output_format="json",browser="chrome",tweets_count=10)
# print(bbcbangla.encode('utf-8'))
from twitter_scraper import scrape_profile


scrape_profile(twitter_username="bbcbangla",output_format="csv",browser="firefox",tweets_count=600,filename="bbcbangla",directory="./Output")

