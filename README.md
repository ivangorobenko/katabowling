# KataBowling TDD01

Chaque partie comprend 10 frames

**Cas simple :** Dans une frame si les 10 quilles ne tombent pas en 2 lancers 
Le nombre de points gagnés est le nombre de quilles tombées. 

**Spare :** Dans une frame si les 10 quilles tombent en 2 lancers
Le nombre de points gagnés est le nombre de quilles tombées plus les points du lancer suivant
Si un spare est fait à la dernière frame le joueur à 1 lancer bonus

**Strike :** Dans une frame si les 10 quilles tombent en 1 lancer
Le nombre de points gagnés est le nombre de quilles tombées plus les points des 2 lancers suivants
Si un Strike est fait à la dernière frame le joueur à 2 lancer bonus

##Exemples

Parties sans SPARE et sans STRIKE  

| 1   | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | Total
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:
| 1, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 1  
| 1, 1 | 1, 1 | 1, 1 | 1, 1 | 1, 1 | 1, 1 | 1, 1 | 1, 1 | 1, 1 | 1, 1 | 20  
| 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 1, 2 | 3


Parties avec SPARE et sans STRIKE

| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | Bonus | Total  
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----: |:----:
| 5, 5 | 1, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -     | 12  
| 0, 0 | 0, 0 | 0, 0 | 9, 1 | 6, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -     | 22  
| 0, 0 | 0, 0 | 0, 0 | 7, 3 | 5, 5 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -     | 25  
| 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 6, 4 | 6     | 16  
| 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 5, 5 | 10    | 20  


Parties sans SPARE et avec STRIKE

| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | Bonus  | Total  
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:------:|:----:
| 10   | 3, 1 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 18  
| 0, 0 | 0, 0 | 0, 0 |  10  | 6, 3 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 25  
|  10  |  10  |  10  | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 60 
| 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 |  10  | 1, 6   | 17  
| 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 |  10  | 5, 5   | 20  
| 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 |  10  | 10, 10 | 30 
|  10  |  10  |  10  |  10  |  10  |  10  |  10  |  10  |  10  |  10  | 10, 10 | 300 

 
 
Parties avec SPARE et avec STRIKE
 
| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | Bonus  | Total  
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:------:|:----:
| 10   | 5, 5 | 1, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 32  
| 10   | 6, 4 |  10  | 0, 1 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 52  
| 1, 9 |  10  | 1, 2 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 36  
| 6, 4 |  10  |  10  | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 50  
| 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | 0, 0 | -      | 30 

