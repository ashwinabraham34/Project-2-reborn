This should help with how to use this repo:

1.
In the scraping file run the Scrape all 3 notebook.
This should return a CSV called "ONABBC_Data"
also there is an alberta_data.csv file that can be used if the splinter scraping doesn't work right now scrape all 3 is set to use that but if you comment this line out (which there is a text above that line in the notebook) it should be able to use splinter.

2.
Run the data_to_sql notebook which will use the ONABBC_Data.csv file and create a repo. You will have to make a SQL DB called OAB_database first and then this file should populate that with 5 tables.

3.
In the app file run the x.py and this should create our application. It should be run on the localhost server.
