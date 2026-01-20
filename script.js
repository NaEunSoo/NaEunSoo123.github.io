const components = [
    {
        name: "저항 (Resistor)",
        category: "passive",
        description: "전류의 흐름을 방해하여 전압을 낮추거나 전류량을 조절하는 가장 기본적인 부품입니다.",
        unit: "옴 (Ω)",
        symbol: "R",
        icon: "⚡"
    },
    {
        name: "커패시터 (Capacitor)",
        category: "passive",
        description: "전하를 저장했다가 필요할 때 방출하는 부품으로, 필터링이나 에너지 저장에 사용됩니다.",
        unit: "패럿 (F)",
        symbol: "C",
        icon: "🔋"
    },
    {
        name: "인덕터 (Inductor)",
        category: "passive",
        description: "코일 형태로 자기장을 이용하여 에너지를 저장하며, 급격한 전류 변화를 억제합니다.",
        unit: "헨리 (H)",
        symbol: "L",
        icon: "🌀"
    },
    {
        name: "다이오드 (Diode)",
        category: "active",
        description: "전류를 한쪽 방향으로만 흐르게 하는 반도체 소자로, 정류 회로에 필수적입니다.",
        unit: "-",
        symbol: "D",
        icon: "➡️"
    },
    {
        name: "발광 다이오드 (LED)",
        category: "active",
        description: "전기에너지를 빛에너지로 변환하는 소자로, 상태 표시나 조명에 사용됩니다.",
        unit: "-",
        symbol: "LED",
        icon: "💡"
    },
    {
        name: "트랜지스터 (BJT)",
        category: "active",
        description: "작은 전류로 큰 전류를 제어하는 스위칭 및 증폭 작용을 하는 핵심 반도체입니다.",
        unit: "-",
        symbol: "TR / Q",
        icon: "🔌"
    },
    {
        name: "조도센서 (CDS)",
        category: "sensor",
        description: "주변의 빛의 세기에 따라 저항값이 변하는 센서로, 자동 점등 장치에 쓰입니다.",
        unit: "Ω (가변)",
        symbol: "CDS",
        icon: "☀️"
    },
    {
        name: "초음파 센서",
        category: "sensor",
        description: "초음파를 발사하고 반사되어 돌아오는 시간으로 거리를 측정하는 센서입니다.",
        unit: "cm",
        symbol: "Ultrasonic",
        icon: "📡"
    },
    {
        name: "서보 모터",
        category: "etc",
        description: "각도를 정밀하게 제어할 수 있는 모터로, 로봇의 관절 부위에 많이 사용됩니다.",
        unit: "Degree",
        symbol: "Servo",
        icon: "⚙️"
    },
    {
        name: "부저 (Buzzer)",
        category: "etc",
        description: "전기 신호를 소리로 바꾸어 주는 장치로, 경보음이나 알림음에 사용됩니다.",
        unit: "Hz",
        symbol: "BZ",
        icon: "🔊"
    },
    {
        name: "가변 저항 (Potentiometer)",
        category: "passive",
        description: "다이얼을 돌려 저항값을 임의로 조절할 수 있는 부품으로, 볼륨 조절 등에 쓰입니다.",
        unit: "Ω",
        symbol: "VR",
        icon: "🎡"
    },
    {
        name: "555 타이머 IC",
        category: "active",
        description: "일정한 시간 간격으로 펄스를 생성하거나 지연시키는 데 사용되는 매우 대중적인 집적회로입니다.",
        unit: "-",
        symbol: "IC / NE555",
        icon: "📟"
    },
    {
        name: "연산 증폭기 (OP-AMP)",
        category: "active",
        description: "전압을 증폭하거나 비교, 연산하는 데 사용되는 다목적 아날로그 회로 소자입니다.",
        unit: "Gain",
        symbol: "IC / OP-AMP",
        icon: "🔼"
    },
    {
        name: "온습도 센서 (DHT11)",
        category: "sensor",
        description: "주변의 온도와 습도를 동시에 측정하여 디지털 신호로 출력하는 센서입니다.",
        unit: "°C / %",
        symbol: "DHT",
        icon: "🌡️"
    },
    {
        name: "릴레이 (Relay)",
        category: "etc",
        description: "낮은 전압으로 높은 전압이나 큰 전류가 흐르는 회로를 제어하는 전자식 스위치입니다.",
        unit: "V / A",
        symbol: "RY",
        icon: "🔌"
    },
    {
        name: "서미스터 (Thermistor)",
        category: "sensor",
        description: "온도에 따라 저항값이 변하는 소자로, 온도 측정 및 과열 방지 회로에 사용됩니다.",
        unit: "Ω / °C",
        symbol: "TH / NTC",
        icon: "🌡️"
    },
    {
        name: "전계효과 트랜지스터 (MOSFET)",
        category: "active",
        description: "전압으로 전류를 제어하는 트랜지스터로, 전력 효율이 좋아 고속 스위칭 회로에 필수적입니다.",
        unit: "-",
        symbol: "FET / Q",
        icon: "🔳"
    },
    {
        name: "제너 다이오드 (Zener Diode)",
        category: "active",
        description: "역방향 전압이 일정 수준 이상일 때 전류를 흐르게 하여 전압을 일정하게 유지(정전압)합니다.",
        unit: "V (Zener)",
        symbol: "ZD",
        icon: "🛡️"
    },
    {
        name: "포토커플러 (Optoisolator)",
        category: "active",
        description: "빛을 이용하여 두 회로를 전기적으로 절연시키면서 신호를 전달하는 소자입니다.",
        unit: "-",
        symbol: "PC / IC",
        icon: "🔦"
    },
    {
        name: "피에조 스피커",
        category: "etc",
        description: "압전 효과를 이용해 전기 신호를 소리로 바꾸는 장치로, 간단한 멜로디 연주에 적합합니다.",
        unit: "Hz",
        symbol: "SPK",
        icon: "🎵"
    },
    {
        name: "PIR 센서",
        category: "sensor",
        description: "적외선의 변화를 감지하여 사람이나 동물의 움직임을 찾아내는 인체 감지 센서입니다.",
        unit: "-",
        symbol: "PIR",
        icon: "🚶"
    },
    {
        name: "가속도 센서 (MPU6050)",
        category: "sensor",
        description: "기기의 기울어짐이나 움직임의 가속도를 측정하는 센서로 스마트폰, 드론 등에 쓰입니다.",
        unit: "g / degree",
        symbol: "IMU",
        icon: "📐"
    },
    {
        name: "적외선 수신 모듈",
        category: "sensor",
        description: "리모컨 등에서 나오는 적외선 신호를 받아 해석하는 데 사용되는 센서입니다.",
        unit: "-",
        symbol: "IR Rx",
        icon: "🎮"
    },
    {
        name: "수위 센서",
        category: "sensor",
        description: "전도성을 이용하여 물의 높이를 측정하는 센서로, 스마트 화분 등에 사용됩니다.",
        unit: "Level",
        symbol: "Water",
        icon: "💧"
    },
    {
        name: "솔레노이드",
        category: "etc",
        description: "전기를 흘리면 자기장이 발생하여 금속 막대를 움직이는 전자식 액추에이터입니다.",
        unit: "V / A",
        symbol: "SOL",
        icon: "🏗️"
    },
    {
        name: "스테핑 모터",
        category: "etc",
        description: "펄스 신호에 따라 한 단계씩 정밀하게 회전하는 모터로, 3D 프린터의 핵심 부품입니다.",
        unit: "Step",
        symbol: "Step Motor",
        icon: "🎡"
    },
    {
        name: "7세그먼트 (FND)",
        category: "etc",
        description: "숫자를 표시하기 위해 7개의 LED를 배치한 표시 장치로 시계, 계산기에 쓰입니다.",
        unit: "-",
        symbol: "FND",
        icon: "7️⃣"
    },
    {
        name: "LCD 캐릭터 디스플레이",
        category: "etc",
        description: "문자나 숫자를 화면에 출력해주는 장치로, I2C 통신을 이용해 줄여서 연결하기도 합니다.",
        unit: "Chars",
        symbol: "LCD",
        icon: "📺"
    },
    {
        name: "수정 진동자 (Crystal)",
        category: "passive",
        description: "정밀한 주파수를 발생시켜 마이크로프로세서의 시계(Clock) 역할을 합니다.",
        unit: "Hz",
        symbol: "XTAL / Y",
        icon: "💎"
    },
    {
        name: "브릿지 다이오드",
        category: "active",
        description: "4개의 다이오드를 연결해 교류(AC)를 직류(DC)로 변환하는 정류 전용 부품입니다.",
        unit: "V / A",
        symbol: "BD",
        icon: "🌉"
    },
    {
        name: "택트 스위치",
        category: "etc",
        description: "누를 때만 연결되고 손을 떼면 떨어지는 가장 기본적인 형태의 입력 스위치입니다.",
        unit: "-",
        symbol: "SW",
        icon: "🔘"
    },
    {
        name: "DIP 스위치",
        category: "etc",
        description: "회로판에 장착되어 여러 설정값을 On/Off로 지정할 때 사용하는 스위치 묶음입니다.",
        unit: "Bits",
        symbol: "DIP SW",
        icon: "🎹"
    },
    {
        name: "토글 스위치",
        category: "etc",
        description: "레버를 위아래로 젖혀서 상태를 유지하는 방식의 전원 및 설정용 스위치입니다.",
        unit: "-",
        symbol: "Toggle SW",
        icon: "🖱️"
    },
    {
        name: "트라이액 (TRIAC)",
        category: "active",
        description: "교류(AC) 전력을 제어하기 위해 양방향으로 전류를 흘릴 수 있는 반도체 소자입니다.",
        unit: "V / A",
        symbol: "TRC",
        icon: "⚡"
    },
    {
        name: "배리스터 (Varistor)",
        category: "passive",
        description: "높은 전압이 들어오면 저항이 급격히 낮아져 회로를 보호하는 전압 제한 소자입니다.",
        unit: "V",
        symbol: "MOV",
        icon: "🛡️"
    },
    {
        name: "가변 커패시터",
        category: "passive",
        description: "용량을 조절할 수 있는 커패시터로 주로 라디오의 주파수 조정에 사용됩니다.",
        unit: "F",
        symbol: "VC",
        icon: "📻"
    },
    {
        name: "칩 저항 (SMD Resistor)",
        category: "passive",
        description: "표면 실장형(SMD) 기판에 사용되는 매우 작은 크기의 정밀 저항입니다.",
        unit: "Ω",
        symbol: "R",
        icon: "⬛"
    },
    {
        name: "탄탈 커패시터",
        category: "passive",
        description: "소형이면서 큰 용량을 가지며 온도 특성이 우수한 고신뢰성 커패시터입니다.",
        unit: "F",
        symbol: "C",
        icon: "🟠"
    },
    {
        name: "쇼트키 다이오드",
        category: "active",
        description: "순방향 전압 강하가 낮고 스위칭 속도가 매우 빨라 고효율 전원 회로에 쓰입니다.",
        unit: "-",
        symbol: "D",
        icon: "⚡"
    },
    {
        name: "포토 다이오드",
        category: "active",
        description: "빛을 받으면 전류가 흐르는 소자로 광검출이나 광통신 수신부에 사용됩니다.",
        unit: "-",
        symbol: "PD",
        icon: "👁️"
    },
    {
        name: "터널 다이오드",
        category: "active",
        description: "양자 터널링 효과를 이용해 매우 빠른 스위칭과 발진이 가능한 특수 다이오드입니다.",
        unit: "-",
        symbol: "D",
        icon: "🌀"
    },
    {
        name: "홀 센서 (Hall Sensor)",
        category: "sensor",
        description: "자기장의 세기를 감지하는 센서로 모터의 회전수 측정이나 문 열림 감지에 쓰입니다.",
        unit: "Tesla",
        symbol: "Hall",
        icon: "🧲"
    },
    {
        name: "가스 센서 (MQ-2)",
        category: "sensor",
        description: "주변의 가스 농도를 측정하여 누출을 감지하는 센서입니다. (LPG, 연기 등)",
        unit: "ppm",
        symbol: "Gas",
        icon: "🌫️"
    },
    {
        name: "기압 센서 (BMP180)",
        category: "sensor",
        description: "대기압을 측정하여 고도나 날씨 변화를 파악하는 정밀 센서입니다.",
        unit: "hPa",
        symbol: "Baro",
        icon: "☁️"
    },
    {
        name: "자이로 센서",
        category: "sensor",
        description: "물체의 회전 속도(각속도)를 측정하여 균형을 잡거나 방향을 인식합니다.",
        unit: "deg/s",
        symbol: "Gyro",
        icon: "🔄"
    },
    {
        name: "심박 센서",
        category: "sensor",
        description: "손가락 끝의 혈류 변화를 이용해 심장 박동수를 측정하는 헬스케어용 센서입니다.",
        unit: "BPM",
        symbol: "Heart",
        icon: "❤️"
    },
    {
        name: "토양 수분 센서",
        category: "sensor",
        description: "흙속의 수분 함량을 측정하여 식물에 물이 필요한지 알려주는 센서입니다.",
        unit: "%",
        symbol: "Soil",
        icon: "🌱"
    },
    {
        name: "사운드 센서",
        category: "sensor",
        description: "주변 소리의 크기를 인식하여 소리에 반응하는 장치를 만들 때 사용합니다.",
        unit: "dB",
        symbol: "Mic",
        icon: "🎤"
    },
    {
        name: "레이저 다이오드 모듈",
        category: "active",
        description: "직진성이 강한 레이저 빛을 쏘는 소자로 거리 측정이나 지시기에 쓰입니다.",
        unit: "mW",
        symbol: "Laser",
        icon: "🔴"
    },
    {
        name: "로터리 인코더",
        category: "etc",
        description: "회전 방향과 클릭 여부를 알 수 있는 입력 장치로 메뉴 선택에 자주 쓰입니다.",
        unit: "Pulse",
        symbol: "Encoder",
        icon: "🔘"
    },
    {
        name: "블루투스 모듈 (HC-06)",
        category: "etc",
        description: "스마트폰과 무선 통신을 가능하게 해주는 통신 모듈입니다.",
        unit: "2.4GHz",
        symbol: "BT",
        icon: "📱"
    },
    {
        name: "Wi-Fi 모듈 (ESP8266)",
        category: "etc",
        description: "인터넷에 연결하여 사물인터넷(IoT)을 구현할 수 있는 저렴한 모듈입니다.",
        unit: "Wi-Fi",
        symbol: "ESP",
        icon: "🌐"
    },
    {
        name: "진동 모터",
        category: "etc",
        description: "편심 웨이트를 돌려 진동을 발생시키며 알림용으로 사용됩니다.",
        unit: "-",
        symbol: "Vib Motor",
        icon: "📳"
    },
    {
        name: "MP3 플레이어 모듈",
        category: "etc",
        description: "SD 카드의 음악 파일을 재생해주는 모듈로 음성 안내 등에 쓰입니다.",
        unit: "Audio",
        symbol: "MP3",
        icon: "🎵"
    },
    {
        name: "RFID 모듈",
        category: "etc",
        description: "카드나 태그를 인식하여 출입 통제 등을 할 수 있는 무선 인식 모듈입니다.",
        unit: "13.56MHz",
        symbol: "RFID",
        icon: "💳"
    },
    {
        name: "실시간 시계 (RTC)",
        category: "etc",
        description: "전원이 꺼져도 시간을 유지하는 정밀 시계 모듈입니다.",
        unit: "Time",
        symbol: "RTC",
        icon: "🕒"
    },
    {
        name: "DC-DC 컨버터",
        category: "etc",
        description: "입력 전압을 높이거나(Step-up) 낮추어(Step-down) 주는 안정화 회로입니다.",
        unit: "V / A",
        symbol: "Converter",
        icon: "⚡"
    },
    {
        name: "리튬 폴리머 배터리",
        category: "etc",
        description: "에너지 밀도가 높아 드론이나 전자기기에 널리 쓰이는 충전용 배터리입니다.",
        unit: "mAh",
        symbol: "Li-Po",
        icon: "🔋"
    },
    {
        name: "전해 커패시터",
        category: "passive",
        description: "극성이 있는 큰 용량의 커패시터로 전원 노이즈 제거에 필수적입니다.",
        unit: "µF",
        symbol: "C",
        icon: "🥫"
    },
    {
        name: "세라믹 커패시터",
        category: "passive",
        description: "고주파 특성이 좋아 무선 신호나 디지털 회로의 노이즈 차단에 효과적입니다.",
        unit: "pF",
        symbol: "C",
        icon: "🧆"
    },
    {
        name: "필름 커패시터",
        category: "passive",
        description: "내압이 높고 안정적이어서 오디오 회로나 조명 장치에 사용됩니다.",
        unit: "µF",
        symbol: "C",
        icon: "📦"
    },
    {
        name: "슈퍼 커패시터 (EDLC)",
        category: "passive",
        description: "용량이 매우 커서 보조 전원이나 백업용으로 사용되는 응축기입니다.",
        unit: "F",
        symbol: "SC",
        icon: "🏗️"
    },
    {
        name: "정전압 레귤레이터 (7805)",
        category: "active",
        description: "높은 고전압을 5V 등 일정한 전압으로 정확하게 변환해주는 소자입니다.",
        unit: "V",
        symbol: "REG",
        icon: "📏"
    },
    {
        name: "스크라이크 (SCR)",
        category: "active",
        description: "한 번 켜지면 꺼지지 않는 특성을 가진 스위칭 소자로 대전력 제어에 쓰입니다.",
        unit: "V / A",
        symbol: "SCR",
        icon: "🔘"
    },
    {
        name: "다이액 (DIAC)",
        category: "active",
        description: "트라이액의 트리거용으로 주로 사용되는 양방향 스위칭 부품입니다.",
        unit: "V",
        symbol: "DIAC",
        icon: "🔗"
    },
    {
        name: "포토 트랜지스터",
        category: "active",
        description: "빛의 세기에 따라 베이스 전류가 변하여 증폭 작용을 하는 수광 소자입니다.",
        unit: "-",
        symbol: "PTR",
        icon: "🔦"
    },
    {
        name: "쇼트키 배리어 다이오드",
        category: "active",
        description: "저전압 강하와 고속 스위칭 특성을 결합한 다이오드입니다.",
        unit: "V",
        symbol: "SBD",
        icon: "⚡"
    },
    {
        name: "컬러 센서 (TCS3200)",
        category: "sensor",
        description: "빛의 RGB 성분을 감지하여 물체의 색상을 구분하는 센서입니다.",
        unit: "RGB",
        symbol: "Color",
        icon: "🌈"
    },
    {
        name: "열전소자 (Peltier)",
        category: "etc",
        description: "전류를 흘리면 한쪽은 차가워지고 반대쪽은 뜨거워지는 냉각 소자입니다.",
        unit: "°C / W",
        symbol: "TEC",
        icon: "❄️"
    },
    {
        name: "플렉스 센서",
        category: "sensor",
        description: "구부러지는 정도에 따라 저항값이 변하는 유연한 센서입니다.",
        unit: "Ω",
        symbol: "Flex",
        icon: "➰"
    },
    {
        name: "수위 플로트 스위치",
        category: "sensor",
        description: "부표의 위치에 따라 접점이 붙거나 떨어지는 기계식 수위 감지 장치입니다.",
        unit: "-",
        symbol: "Float SW",
        icon: "⚓"
    },
    {
        name: "자석 센서 (리드 스위치)",
        category: "sensor",
        description: "자석이 가까이 오면 내부의 금속판이 붙는 무접점 스위치입니다.",
        unit: "-",
        symbol: "Reed SW",
        icon: "🧲"
    },
    {
        name: "UV 센서",
        category: "sensor",
        description: "자외선의 양을 측정하여 자외선 지수를 알려주는 센서입니다.",
        unit: "UV Index",
        symbol: "GUVA",
        icon: "☀️"
    },
    {
        name: "충격 센서",
        category: "sensor",
        description: "물리적인 충격이나 진동이 발생했는지 감지하는 디지털 센서입니다.",
        unit: "-",
        symbol: "Shock",
        icon: "💥"
    },
    {
        name: "불꽃 감지 센서",
        category: "sensor",
        description: "화재 발생 시 나오는 특정 파장의 빛을 감지하는 센서입니다.",
        unit: "nm",
        symbol: "Flame",
        icon: "🔥"
    },
    {
        name: "알코올 센서",
        category: "sensor",
        description: "내뿜는 숨결 속의 알코올 농도를 감지하는 가스 센서의 일종입니다.",
        unit: "mg/L",
        symbol: "MQ-3",
        icon: "🍷"
    },
    {
        name: "정전용량 터치 센서",
        category: "sensor",
        description: "사람의 몸에 흐르는 정전기를 감지하여 터치를 인식하는 버튼입니다.",
        unit: "-",
        symbol: "TP223",
        icon: "👈"
    },
    {
        name: "조이스틱 모듈",
        category: "etc",
        description: "X, Y축의 아날로그 값과 버튼 클릭을 인식하는 입력 장치입니다.",
        unit: "X, Y, Z",
        symbol: "Joystick",
        icon: "🎮"
    },
    {
        name: "버튼 셀 (코인 배터리)",
        category: "etc",
        description: "소형 전자기기의 백업 전원으로 쓰이는 동전 모양의 배터리입니다.",
        unit: "V",
        symbol: "CR2032",
        icon: "🪙"
    },
    {
        name: "스위칭 허브 IC",
        category: "active",
        description: "네트워크 신호를 여러 곳으로 나누어 전달하는 전문 집적회로입니다.",
        unit: "Mbps",
        symbol: "LAN IC",
        icon: "🕸️"
    },
    {
        name: "오디오 증폭기 IC (LM386)",
        category: "active",
        description: "낮은 전력의 오디오 신호를 스피커를 울릴 만큼 증폭해주는 소자입니다.",
        unit: "Watt",
        symbol: "AMP IC",
        icon: "📢"
    },
    {
        name: "적외선 장애물 감지 센서",
        category: "sensor",
        description: "적외선을 쏘고 반사되는 양을 측정해 앞의 물체를 감지합니다.",
        unit: "-",
        symbol: "IR Sensor",
        icon: "🚧"
    },
    {
        name: "라인 트레이서 센서",
        category: "sensor",
        description: "바닥의 검은선과 흰색 면을 구분하여 로봇이 선을 따라가게 돕습니다.",
        unit: "-",
        symbol: "Line",
        icon: "🛤️"
    },
    {
        name: "OLED 디스플레이 (0.96 inch)",
        category: "etc",
        description: "작지만 선명한 화면으로 다양한 텍스트와 그래픽을 출력할 수 있습니다.",
        unit: "128x64",
        symbol: "OLED",
        icon: "📱"
    },
    {
        name: "매트릭스 키패드",
        category: "etc",
        description: "가로세로 선을 조합해 적은 핀으로 많은 버튼을 입력받는 장치입니다.",
        unit: "4x4",
        symbol: "Keypad",
        icon: "🔢"
    },
    {
        name: "수냉 펌프 (DC 5V)",
        category: "etc",
        description: "액체를 순환시켜 냉각하거나 물을 옮기는 용도의 소형 펌프입니다.",
        unit: "L/min",
        symbol: "Pump",
        icon: "🚰"
    },
    {
        name: "전자기 릴레이 (SSR)",
        category: "etc",
        description: "기계식 접점 없이 반도체로 전류를 차단하는 소음 없는 릴레이입니다.",
        unit: "A",
        symbol: "SSR",
        icon: "🧊"
    },
    {
        name: "압력 센서 (FSR)",
        category: "sensor",
        description: "누르는 힘의 크기에 따라 저항값이 변하는 센서입니다.",
        unit: "N",
        symbol: "FSR",
        icon: "👣"
    },
    {
        name: "먼지 센서 (PMS7003)",
        category: "sensor",
        description: "미세먼지(PM2.5, PM10)의 농도를 정밀하게 측정하는 센서입니다.",
        unit: "µg/m³",
        symbol: "Dust",
        icon: "🌫️"
    },
    {
        name: "비 접촉 온도 센서",
        category: "sensor",
        description: "물체에서 나오는 적외선을 측정해 직접 닿지 않고 온도를 잽니다.",
        unit: "°C",
        symbol: "MLX90614",
        icon: "🌡️"
    },
    {
        name: "심박 및 혈중 산소 센서",
        category: "sensor",
        description: "심박수와 혈액 내 산소 포화도를 동시에 측정하는 고급 센서입니다.",
        unit: "% / BPM",
        symbol: "MAX30102",
        icon: "🫀"
    },
    {
        name: "풍속 센서",
        category: "sensor",
        description: "바람의 세기를 전압 신호로 변환하여 알려주는 기상 관측용 센서입니다.",
        unit: "m/s",
        symbol: "Wind",
        icon: "🎐"
    },
    {
        name: "자이로/가속도/지자기 (9축)",
        category: "sensor",
        description: "정밀한 방향과 자세를 잡기 위한 고성능 통합 센서 모듈입니다.",
        unit: "9-Axis",
        symbol: "MPU9250",
        icon: "🧭"
    },
    {
        name: "전류 센서 (ACS712)",
        category: "sensor",
        description: "회로에 흐르는 전류를 홀 효과를 이용해 안전하게 측정하는 센서입니다.",
        unit: "A",
        symbol: "Current",
        icon: "⚡"
    },
    {
        name: "I2C 통신 모듈",
        category: "etc",
        description: "LCD 등을 단 2개의 선으로 연결할 수 있게 변환해주는 보조 장치입니다.",
        unit: "-",
        symbol: "I2C",
        icon: "🧬"
    },
    {
        name: "로직 레벨 컨버터",
        category: "etc",
        description: "3.3V와 5V를 사용하는 소자 사이의 전압 차이를 맞춰주는 중계기입니다.",
        unit: "V",
        symbol: "Level Conv",
        icon: "🎚️"
    },
    {
        name: "태양광 패널",
        category: "etc",
        description: "빛을 받아 전기를 생산하는 재생 에너지 소자입니다.",
        unit: "W / V",
        symbol: "Solar",
        icon: "☀️"
    },
    {
        name: "다각형 홀 센서",
        category: "sensor",
        description: "모터 내부의 회전 방향과 속도를 정밀하게 읽어내는 센서입니다.",
        unit: "-",
        symbol: "Hall",
        icon: "🎡"
    }
];

const resultsGrid = document.getElementById('resultsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const tags = document.querySelectorAll('.tag');

function displayComponents(filteredList) {
    resultsGrid.innerHTML = '';

    if (filteredList.length === 0) {
        resultsGrid.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
        return;
    }

    filteredList.forEach((comp, index) => {
        const card = document.createElement('div');
        card.className = 'component-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="card-icon">${comp.icon}</div>
            <h3>${comp.name}</h3>
            <p>${comp.description}</p>
            <div class="card-footer">
                <span>기호: ${comp.symbol}</span>
                <span>단위: ${comp.unit}</span>
            </div>
        `;

        resultsGrid.appendChild(card);
    });
}

function filterComponents() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.tag.active').dataset.category;

    const filtered = components.filter(comp => {
        const matchesSearch = comp.name.toLowerCase().includes(searchTerm) ||
            comp.description.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || comp.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    displayComponents(filtered);
}

searchInput.addEventListener('input', filterComponents);
searchBtn.addEventListener('click', filterComponents);

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        filterComponents();
    });
});

// 초기 실행
displayComponents(components);
