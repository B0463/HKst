function get(objFG) {
    return document.getElementById(objFG);
}
function khipo(cat1, cat2) {
    const cat1q = Math.pow(cat1, 2);
    const cat2q = Math.pow(cat2, 2);
    const hipoq = cat1q+cat2q;
    const hipof = Math.sqrt(hipoq);
    return hipof;
}
function hipocalc() {
    const cat1 = get("cat1");
    const cat2 = get("cat2");
    const hipo = get("hipo");
    const hipoRes = khipo(cat1.value, cat2.value);
    hipo.value = hipoRes;
}
