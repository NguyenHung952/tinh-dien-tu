function calculateCurrent() {
    let voltage = parseFloat(document.getElementById("voltageOhm").value);
    let resistance = parseFloat(document.getElementById("resistanceOhm").value);
    if (resistance > 0) {
        document.getElementById("currentResult").innerText = "🔋 Dòng điện: " + (voltage / resistance).toFixed(2) + " A";
    } else {
        document.getElementById("currentResult").innerText = "⚠️ Vui lòng nhập giá trị hợp lệ";
    }
}

function calculatePower() {
    let voltage = parseFloat(document.getElementById("voltagePower").value);
    let current = parseFloat(document.getElementById("currentPower").value);
    document.getElementById("powerResult").innerText = "⚡ Công suất: " + (voltage * current).toFixed(2) + " W";
}

function convertUnit() {
    let value = parseFloat(document.getElementById("unitValue").value);
    let type = document.getElementById("unitType").value;
    let result = 0;
    switch (type) {
        case "mV": result = value / 1000 + " V"; break;
        case "mA": result = value / 1000 + " A"; break;
        case "kOhm": result = value * 1000 + " Ω"; break;
        case "MHz": result = value * 1000000 + " Hz"; break;
    }
    document.getElementById("unitResult").innerText = "✅ Kết quả: " + result;
}
