$(()=>{
    $.getJSON("../server/data.1.json", (data) => {
            var manager1 = new Manager(data);
            manager1.init();
        });

})