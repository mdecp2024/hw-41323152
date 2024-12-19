var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  fqpabi8 \n 個人倉儲:\xa0 https://github.com/mdecp2024/hw-41323152 \n 個人網站:  https://mdecp2024.github.io/hw-41323152 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n 加入Brython介面 \n \n \n \n \n 編寫 print 與 for 迴圈相關程式 \n \n \n 使用可攜程式維護作業網站 \n \n \n \n \n 熟悉 ShareX 拍攝電腦操作流程影片 \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一: \n \n 題目二: \n \n 題目三: \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '第一題( "*"畫出空心圓 ) \n \n import math\n\nsize = 10  # 設定字元區域的大小為 10x10\nradius = 3.5 # 設定半徑為 3.5\ncenter = 3.5  # 圓心位置設為 (3.5, 3.5)\n\nfor y in range(size):\n    for x in range(size):\n        # 計算每個點到圓心的距離\n        distance = math.sqrt((x - center) ** 2 + (y - center) ** 2)\n        \n        # 判斷該點是否在圓的邊緣附近\n        if radius - 0.5 < distance < radius + 0.5:\n            print("＊", end="")  # 使用全形字符 "＊"\n        else:\n            print("\u3000", end="")  # 使用全形空格\n    print()\n \n \n \n 心得:上次是做金字塔，這次我嘗試做空心圓，雖然程式我不是自己全部自己寫，但我還是有了解一些一步步學習。下一次可以挑戰更高難度的圖形形狀。 \n 第二題( 黑色方塊畫圓 ) \n \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立畫布超檔案物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每格的像素數\ngs = 20  # 每格的大小是 20 像素\n\n# gs*tc = 畫布寬高\nctx = canvas.getContext("2d")\n\n# 畫矩形的函數\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 繪製網格的函數\ndef grid(width, height, grid_pix):\n    # 繪製 10x10 網格，每格大小為 grid_pix\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 填充單個方塊的函數\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)  # x 和 y 乘以 gs 以調整位置\n\n# 繪製空心圓的函數\ndef draw_hollow_circle(cx, cy, radius):\n    for x in range(10):\n        for y in range(10):\n            # 計算每個格子到圓心的距離\n            distance = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5\n            # 判斷這個格子是否在圓的邊緣範圍內 (半徑邊界)\n            if radius - 0.5 <= distance <= radius + 0.5:\n                fill(x, y, "black")  # 填充黑色，顯示圓形的邊界\n\n# 清除畫布\nctx.clearRect(0, 0, canvas.width, canvas.height)\n\n# 繪製網格 (10x10 網格，每格 20x20 像素)\ngrid(10, 10, gs)\n\n# 繪製空心圓，圓心在 (5, 5) 位置，半徑為 3 格 (60 像素)\ndraw_hollow_circle(5, 5, 3)  # 3格半徑\n \n \n \n \n 心得:已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. 可以用任何指令做出圖形下次要挑戰更高難度的試試看，我想做做看台灣國旗。 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '我已學會for和print迴圈 : \n \n for i in range(1, 6):\n    print(f"{i}. 我很棒") \n 心得:我已了解pythoh最基礎的for與print迴圈，雖然這很簡單，但這在python是最常用的指令。 \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '( 劃出一條直線和兩個正方形以及外接圓 ) \n from browser import html\nfrom browser import document as doc\n\n# 設置畫布\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke() \n  引入 Brython 程式庫  \n \n \n  啟動 Brython  \n \n  設置容器  \n \n  利用 Brython 繪圖  \n \n \n ( 圖形上色 ) \n from browser import html\nfrom browser import document as doc\n\n# 設置畫布\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke()\n\n\n# 儲存幾何參數\nshapes = {\n    "circle1": (200, 200, 141.4),\n    "circle2": (300, 300, 141.4),\n    "square1": (100, 100, 300, 300),\n    "square2": (200, 200, 400, 400),\n}\n\n# 簡化的判定函式\ndef is_in_circle(x, y, cx, cy, r):\n    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\ndef is_in_square(x, y, x1, y1, x2, y2):\n    return x1 <= x <= x2 and y1 <= y <= y2\n\n# 根據點判定區域並返回顏色\ndef get_region_color(x, y):\n    c1 = is_in_circle(x, y, *shapes["circle1"])\n    c2 = is_in_circle(x, y, *shapes["circle2"])\n    s1 = is_in_square(x, y, *shapes["square1"])\n    s2 = is_in_square(x, y, *shapes["square2"])\n\n    # 不在任何圓內\n    if not c1 and not c2:\n        return None\n\n    # 同時在兩個圓內\n    if c1 and c2:\n        return "#FFE153"  \n\n    # 第一個圓的判定\n    if c1:\n        if s1:\n            return "#4A4AFF" if y < x else "#96FED1" \n        if y < shapes["square1"][1]:\n            return "#1AFD9C"  \n        if y > shapes["square1"][3]:\n            return "#FF0000"  \n        if x < shapes["square1"][0]:\n            return "#A5A552"  \n        if x > shapes["square1"][2]:\n            return "#AD5A5A"  \n\n    # 第二個圓的判定\n    if c2:\n        if s2:\n            return "#D3A4FF"  \n        if y < shapes["square2"][1]:\n            return "#930093"  \n        if y > shapes["square2"][3]:\n            return "#FF359A"  \n        if x < shapes["square2"][0]:\n            return "#8600FF"  \n        if x > shapes["square2"][2]:\n            return "#5B4B00"  \n\n    return "#D3D3D3"  # \n\n# 繪製掃描點並著色\ndef scan_and_draw():\n    step = 1  # 減小步長提升細膩程度\n    for y in range(0, canvas.height, step):\n        for x in range(0, canvas.width, step):\n            color = get_region_color(x, y)\n            if color:\n                ctx.fillStyle = color\n                ctx.fillRect(x, y, step, step)  # 使用細小矩形填充\n\n# 開始掃描和著色\nscan_and_draw()\n \n  引入 Brython 程式庫  \n \n \n  啟動 Brython  \n \n  設置容器  \n \n  利用 Brython 繪圖  \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '( 畫三個圓加顏色並且每次出來的顏色不一樣 ) \n from browser import html\nfrom browser import document as doc\nimport random\n\n# 利用 HTML 建立 canvas 並定義特性\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython div1"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    # 創建 canvas 並設置寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n   \n    # 獲取 canvas 的 2D 上下文\n    ctx = canvas.getContext("2d")\n   \n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    # 初始化畫布\n    canvas, ctx = initialize_canvas(400, 400)\n   \n    # 清除畫布\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n   \n    # 顏色區域存儲\n    color_dict = {}\n\n    # 使用掃描線方法填充區域\n    for py in range(0, canvas.height):\n        # 逐行掃描，判斷每個點是否在圓內\n        current_color = None  # 當前掃描線區域的顏色\n        for px in range(0, canvas.width):\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n           \n            if in_circle1 and in_circle2 and in_circle3:\n                # 交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 只在圓1與圓2的交集區域\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle2 and in_circle3:\n                # 只在圓2與圓3的交集區域\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1 and in_circle3:\n                # 只在圓1與圓3的交集區域\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle1:\n                # 只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 點不在圓內，畫外區域\n                current_color = "white"  # 背景色白色\n\n            # 填充顏色\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 三個圓心和半徑的設定\n# 假設三個圓心分佈成等邊三角形的頂點，並設置它們的半徑\nradius = 100  # 圓的半徑\nx1, y1 = 150, 200  # 圓1 圓心\nx2, y2 = 250, 200  # 圓2 圓心\nx3, y3 = 200, 100  # 圓3 圓心\n\n# 呼叫畫圓函式\ndraw_circles(x1, y1, radius, x2, y2, radius, x3, y3, radius) \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '題目一:\xa0 "從 1 累加到 100" \n # 計算從 1 加到 100 的總和\ntotal = sum(range(1, 101))  # 使用 range(1, 101) 生成 1 到 100 的數列，並用 sum() 函數計算總和\n\n# 印出計算結果\nprint(total)  # 輸出總和結果 \n \n 題目二:  "addto" \n def addto(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        total += num\n        print(f"加上 {num} 後，總和為 {total}")\n    return total\n\n# 呼叫函式，計算從 1 加到 100 的總和\ntotal = addto(1, 100)\n\n# 最後印出總和\nprint(f"最終總和：{total}") \n \n 題目三: "add_only_even"  \n def add_only_even(start, end):\n    # 使用 range() 生成從 start 到 end 的數列，但只挑選偶數\n    even_numbers = range(start + (start % 2), end + 1, 2)  # 調整起始點為偶數，並以步長 2 前進\n    return sum(even_numbers)\n\n# 呼叫函式，計算從 1 加到 100 的偶數總和\ntotal = add_only_even(1, 100)\n\n# 印出計算結果\nprint(total)  # 輸出偶數總和結果 \n \n 題目四: " add_avoid_8" \n def add_avoid_8(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        if \'8\' not in str(num):  # 檢查數字是否包含 "8"\n            total += num\n    return total\n\n# 呼叫函式，計算從 1 加到 100 並避免數字包含 "8" 的總和\ntotal = add_avoid_8(1, 100)\n\n# 印出計算結果\nprint(total)  # 輸出避開 "8" 的總和結果 \n 練習:" add_avoid_3_and_8 " \n # 定義函式，計算不包含數字 "3" 和 "8" 的數字總和\ndef add_avoid_3_and_8(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        if \'3\' not in str(num) and \'8\' not in str(num):  # 檢查數字是否包含 "3" 或 "8"\n            total += num\n    return total\n\n# 呼叫函式，計算範圍內的總和\nstart = 1\nend = 100\ntotal = add_avoid_3_and_8(start, end)\n\n# 印出計算結果\nprint(f"從 {start} 到 {end} 的數字總和（排除包含 \'3\' 和 \'8\' 的數字）為：{total}")\n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};