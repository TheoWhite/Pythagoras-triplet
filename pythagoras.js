function getMaximumInput()
{
	while (1)
	{
		var upper_limit = prompt("Enter integer");
		//Convert to int
		upper_limit = parseInt(upper_limit);
		if (isNaN(upper_limit) || upper_limit < 1)
		{
			alert("The entered input was not an integer." + "Or is less than 1. Entered input | " + upper_limit)
		}
		else
		{
			return upper_limit;
		}
	}
}

function computeTriples(maxInt)
{
	/*
		This function is used to calcuate
		all natural number triplets between 1 & maxInt
		Inputs:
				maxInt - Highest number of triplets
		Output:
				array which contains (a,b,c) value of triplet.
	*/
	var counter = [];
	for (var a = 1; a < maxInt - 1; a++)
	{
		for (var b = a; b < maxInt; b++)
		{
			c = Math.sqrt(a * a + b * b);
			if (c % 1 === 0)
			{
				var triplet = [a, b, c];
				if ((a <= maxInt) && (b <= maxInt) && (c <= maxInt))
				{
					counter.push(a, b, c);
				}
			}
		}
	}
	console.log(counter);
	return counter;
}

function printOutput(list)
{
	/*
		This function is used to create the table 
		|		A		  |		B			|		C			|
		|list_a[0]|list_b[0]|list_c[0]|
		|list_a[1]|list_b[2]|list_c[3]|
		Inputs:
				list contains triplets
		Output:
				None
		Side effects:
				Draws table using DOM
	*/
	//Get the document body
	var body_of_document = document.body;
	//Create table for DOM
	var table = document.createElement('table');
	//Table header names
	table_headers = ['A', 'B', 'C'];
	var list_element_counter = 0;
	var red_cell_counter = 1;
	//Create row for each triplet + table_headers
	for (var row_count = 0; row_count != (list.length / 3) + 1; ++row_count)
	{
		const row = table.insertRow();
		/*
		 *Create a cell for each tiplet and table_headers
		 *Also applies all style related effects. 
		 */
		for (var cell_count = 0; cell_count != 3; ++cell_count)
		{
			new_cell = row.insertCell();
			var cell_text;
			if (row_count == 0)
			{
				//Table header 
				new_cell.style.backgroundColor = "white";
				cell_text = table_headers.shift();
				new_cell.style.border = "2px solid Black";
			}
			else
			{
				if (row_count % 2 == 0)
				{
					new_cell.style.backgroundColor = "rgb(255,255,255)";
				}
				else
				{
					new_cell.style.backgroundColor = "rgb(220,220,220)";
				}
				//Display a,b,c values to each cell
				cell_text = list[list_element_counter];
				list_element_counter++;
				red_cell_counter++;
			}
			//Style
			if (cell_count == 1)
			{
				new_cell.style.border = "1px dotted rgb(220,220,220)";
			}
			else
			{
				new_cell.style.border = "1px solid rgb(220,220,220)";
			}
			if ((cell_count == 2) && (row_count != 0))
			{
				new_cell.style.color = "red";
			}
			//new_cell.style.border = "1px solid rgb(220,220,220)"
			new_cell.appendChild(document.createTextNode(cell_text))
		}
	}

	table.style.color = "rgb(102,102,153)";
	table.style.borderCollapse = "collapse";
	body_of_document.appendChild(table);

}
var maxInt = getMaximumInput();
counter = computeTriples(maxInt);
printOutput(counter);