In order to run this evaluation, do this thing:
1. cd backend
2. uvicorn app.main:app --reload
3. do "run all" the evaluation you wanna do.

Note:
1. model accuracy report for the future doesn't work, because it is based on the
   past data that our model has predicted into the future. Hence i made the last30days predictions to check for our model accuracy.
2. PLEASE DONT RERUN THE LAST30DAYS.ipynb plsplspls