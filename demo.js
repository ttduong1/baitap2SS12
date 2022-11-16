function kiem_tra_snt(n){

}
n=prompt("Nhập:")
{
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 100; i < n-1; i+-2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        document.write(n + " là số nguyên tố ");
    }
    else {
        document.write(n + " không phải số nguyên tố ");
    }
}
