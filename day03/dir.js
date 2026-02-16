const fs = require("fs");

function zxqMakeDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
        console.log("Directory created:", path);
    } else {
        console.log("Already exists:", path);
    }
}

function pqrRemoveDir(path) {
    if (fs.existsSync(path)) {
        fs.rmSync(path, { recursive: true, force: true });
        console.log("Directory removed:", path);
    } else {
        console.log("Directory not found:", path);
    }
}

zxqMakeDir("testFolder");
pqrRemoveDir("testFolder");
