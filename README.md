7. Розібратися з функціоналом переміщення та видалення папок, файлів.
   - Не докінця зрозумів, що мається на увазі під словом розібратись. Але функціонал видалення був реалізованим,стосовно функіоналу переміщення він не був реалізований, оскільки такий функіонал я вважаю на порядок складнішим й для нього потрібно більше часу   
   

8. Знайти потенційно вразливі місця з точки зору продуктивності.
   - Основною вразливістю цього додатку буде саме отримування даних з BE ендпоінта, тому що дерева в таком додатку можуть бути доволі велекими

Як рішення я бачу осинхронне підвантаження гілок дерева, по мірі їх відкриття(В бібліотеці "react-accessible-treeview" як я обрав для реалізацяї дерев, якраз є чудовий миханіз для цьог)
