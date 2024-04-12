
var dataArray=[];

async function Lekerdezes(){
    const response = await fetch ('./data1.json');
    const data = await response.json();

    console.log(data);
    dataArray = data;

    GenerateTable();

    return data;
}

function GenerateTable(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headRow = document.createElement("tr");
    const headtext = ["#", "Név", "Életkor", "Fajta", "Gazda neve"];
    headtext.forEach(function(header){
        const th = document.createElement("th");
        th.textContent = header;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.classList.add("table");
    table.classList.add("table-light");
    table.classList.add("table-striped");
    table.classList.add("table-group-divider");
    table.appendChild(thead);

    dataArray.forEach(function(item){
        const row = document.createElement("tr");
        for(var key in item){
            const cell = document.createElement("td");
            cell.textContent=item[key];
            row.appendChild(cell);
        }

        tbody.appendChild(row);


    })

    table.appendChild(tbody);
    document.body.appendChild(table);
}
Lekerdezes();
