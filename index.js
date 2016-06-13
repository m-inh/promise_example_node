/**
 * Created by TooNies1810 on 6/13/16.
 */
// var promise = new Promise(function (resolve, reject) {
//     resolve();
// });

// promise.then(
//     function () {
//         console.log("1 success");
//     },
//     function (error) {
//         console.log("1 error");
//     }
// ).then(
//     function () {
//         console.log("2 success")
//     },
//     function () {
//         console.log("2 error")
//     }
// ). catch(function () {
//     console.log("error catch");
// });

    // default
// kết quả trả về của 1 success thì các then sau đó đều là success
// kết quả trả về của 1 reject thì các then sau đó cũng đều là success (trừ then đầu tiên chạy vào reject)

// console.log(promise);

// promise.then(
//     function () {
//         console.log("1 success");
//     }
// ).then(
//     function () {
//         console.log("2 success")
//     },
//     function () {
//         console.log("2 error")
//     }
// ). catch(function () {
//     console.log("error catch");
// });

// promise.then(
//     function () {
//         console.log("1 success");
//     }
// ).then(
//     function () {
//         console.log("2 success")
//     }
// ). catch(function () {
//     console.log("error catch");
// });



////////////// >2 promise ////////////////

var promise1 = new Promise(function (solve, reject) {
    solve();
});

promise1.then(
    function success() {
        console.log("1");
        return new Promise(function (solve, reject) {
            reject();
        });
    },
    function fail() {
        console.log("0");
    }
). then(
    function () {
        console.log("2 1");
    },
    function () {
        console.log("2 0")
    }
);

// Ket qua tra ve cua 1 promise la 1 promise, hanh dong tiep theo cua no phu thuoc vao trang thai promise truoc do