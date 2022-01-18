// $(function () {
//     function count() {
//         $("#todocount").text($("#todolist").children().length);
//         $("#donecount").text($("#donelist").children().length);
//     }
//     count();

//     $("#title").on("keydown", function (event) {
//         if (event.keyCode == 13) {
//             var value = $(this).val();
//             if (!value) {
//                 alert("内容不能为空");
//                 return false;
//             }
//             var li = $('<li></li>');
//             var input = $('<input type="checkbox">');
//             var p = $('<p>' + value + '</p>');
//             var a = $('<a href="javascript:;" id="' + ($("#todolist").children().length + 1) + '"></a>');
//             li.append(input, p, a);
//             console.log(li);
//             $("#todolist").prepend(li);
//             count();
//         }
//     })
//     $("#todolist").on("click", "a", function () {
//         $(this).parent().remove();
//         count();
//     })
//     $("#todolist").on("click", "input", function () {
//         $("#donelist").append($(this).parent());
//         count();
//     })

//     $("#donelist").on("click", "a", function () {
//         $(this).parent().remove();
//         count();
//     })
//     $("#donelist").on("click", "input", function () {
//         $("#todolist").append($(this).parent());
//         count();
//     })
// })

function getData() {
    var data = localStorage.getItem("todolist");
    if (data !== null) {
        return JSON.parse(data);
    }
    if (data === null) {
        return [];
    }
}

function saveData(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
}

function load() {
    var data = getData();
    $('#todolist, #donelist').empty();
    var todoCount = 0;
    var doneCount = 0;

    $.each(data, function (index, obj) {
        if (obj.done) {
            $("#donelist").prepend('<li><input type="checkbox" checked="true"><p>' + (obj.title) + '</p><a href="javascript:;" id="' + index + '"></a></li>');
            doneCount++;
        }
        if (!obj.done) {
            $("#todolist").prepend('<li><input type="checkbox"><p>' + (obj.title) + '</p><a href="javascript:;" id="' + index + '"></a></li>');
            todoCount++;
        }
    })
    $("#todocount").text(todoCount);
    $("#donecount").text(doneCount);
}

$(function () {
    load();
    $("#title").on("keydown", function (event) {
        if (event.keyCode == 13) {
            var data = getData();
            var todoTask = {title: $(this).val(), done: false}
            data.push(todoTask);
            saveData(data);
            load();
        }
    })
    $("#todolist, #donelist").on("click", "a", function () {
        var data = getData();
        var index = $(this).attr("id");
        data.splice(index);
        saveData(data);
        load();
    })
    $("#todolist, #donelist").on("click", "input", function () {
        var data = getData();
        var index = $(this).siblings('a').attr("id");
        console.log(index);
        console.log($(this).prop("checked"));
        data[index].done = $(this).prop("checked");
        console.log(data);
        saveData(data);
        load();
    })

    $("#donelist").on("click", "a", function () {

    })
    $("#donelist").on("click", "input", function () {

    })
})