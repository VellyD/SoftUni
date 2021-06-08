function extract(content) {
    const text = document.getElementById(content).textContent;
    const reg = /\((.+?)\)/g;
    let mach = reg.exec(text);
    let result = [];

    while (mach != null) {
        result.push(mach[1]);
        mach = reg.exec(text);
    }

    return result.join("; ");

};