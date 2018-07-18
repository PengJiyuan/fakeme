const str = `
Smith    史密斯
  2. Johnson  约翰逊
    3. Williams  威廉姆斯
      4. Jones  约翰
        5. Brown  布朗
          6. Davis  戴维斯
            7. Miller  米勒
              8. Wilson  威尔逊
                9. Moore  摩尔
                  10. Taylor  泰勒
                    11. Anderson  安德森
                      12. Thomas  托马斯
                        13. Jackson  杰克逊
                          14. White  怀特
                            15. Harris  哈里斯
                              16. Martin  马丁
                                17. Thompson  汤姆逊
                                  18. Garcia  加西亚
                                    19. Martinez  
                                      20. Robinson  罗宾森
                                        21. Clark  克拉克
                                          22. Rodriguez  
                                            23. Lewis  路易斯
                                              24. Lee  李
                                                25. Walker 沃克 
                                                  26. Hall  
                                                    27. Allen 艾伦 
                                                      28. Young  
                                                        29. Hernandez  
                                                          30. King  
                                                            31. Wright  
                                                              32. Lopez  洛佩兹
                                                                33. Hill  
                                                                  34. Scott 斯科特 
                                                                    35. Green  格林
                                                                      36. Adams  亚当
                                                                        37. Baker  
                                                                          38. Gonzalez  
                                                                            39. Nelson  
                                                                              40. Carter  
                                                                                41. Mitchell  
                                                                                  42. Perez  
                                                                                    43. Roberts  罗伯特
                                                                                      44. Turner  
                                                                                        45. Phillips 菲利普 
                                                                                          46. Campbell  坎贝尔
                                                                                            47. Parker  帕克
                                                                                              48. Evans  
                                                                                                49. Edwards  爱德华
                                                                                                  50. Collins  
                                                                                                    51. Stewart  斯图尔特
                                                                                                      52. Sanchez  
                                                                                                        53. Morris  
                                                                                                          54. Rogers  
                                                                                                            55. Reed  
                                                                                                              56. Cook  库克
                                                                                                                57. Morgan  
                                                                                                                  58. Bell  
                                                                                                                    59. Murphy  
                                                                                                                      60. Bailey  
                                                                                                                        61. Rivera  
                                                                                                                          62. Cooper 库珀  
                                                                                                                            63. Richardson 理查德森  
                                                                                                                              64. Cox  
                                                                                                                                65. Howard  
                                                                                                                                  66. Ward  
                                                                                                                                    67. Torres  
                                                                                                                                      68. Peterson  彼得森
                                                                                                                                        69. Gray  
                                                                                                                                          70. Ramirez  
                                                                                                                                            71. James  詹姆斯
                                                                                                                                              72. Watson  
                                                                                                                                                73. Brooks  
                                                                                                                                                  74. Kelly  凯莉
                                                                                                                                                    75. Sanders  
                                                                                                                                                      76. Price  
                                                                                                                                                        77. Bennett  
                                                                                                                                                          78. Wood  伍德
                                                                                                                                                            79. Barnes  
                                                                                                                                                              80. Ross  
                                                                                                                                                                81. Henderson  
                                                                                                                                                                  82. Coleman  
                                                                                                                                                                    83. Jenkins  
                                                                                                                                                                      84. Perry 佩里 
                                                                                                                                                                        85. Powell  
                                                                                                                                                                          86. Long  
                                                                                                                                                                            87. Patterson  
                                                                                                                                                                              88. Hughes  
                                                                                                                                                                                89. Flores  
                                                                                                                                                                                  90. Washington 华盛顿  
                                                                                                                                                                                    91. Butler  
                                                                                                                                                                                      92. Simmons 西蒙 
                                                                                                                                                                                        93. Foster  
                                                                                                                                                                                          94. Gonzales  
                                                                                                                                                                                            95. Bryant   
                                                                                                                                                                                              96. Alexander 亚历克斯 
                                                                                                                                                                                                97.Russell  
                                                                                                                                                                                                  98. Griffin   
                                                                                                                                                                                                    99. Diaz  
                                                                                                                                                                                                      100. Hayes  
`;


const reg = /[a-zA-Z]+/g;
const value = str.match(reg).sort();
const fs = require('fs');
fs.writeFile('en_lastname.json', JSON.stringify(value).replace(/"/g, "'"), 'utf8', () => {
  console.log('Done');
});
