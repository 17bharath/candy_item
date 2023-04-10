<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CANDY</title>
</head>

<body>
    <form id="form">
        <label input="Candy">Candy Name:</label>
        <input type="text" class="expenses" id="candy">
        <label input="description">Description:</label>
        <input type="text" class="expenses" id="des">
        <label input="price">Price:</label>
        <input type="text" class="expenses" id="price">
        <label input="Quantity">Quantity:</label>
        <input type="text" class="expenses" id="quantity">
        <input type="submit" id="btn" value="ADD ITEM">
    </form>
    <div id="textContainer">
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
    </div>
    <script>
        var key = document.getElementsByClassName('expenses');
        var container = document.getElementById('textContainer')
        var lis = document.getElementsByTagName('h2')


        document.getElementById('form').addEventListener('submit', (e) => {
            e.preventDefault()

            const data = document.getElementsByClassName('expenses')


            // if (candy.value == '' || description.value == '' || price.value == '' || quantity.value == '') {
            //     alert("Please fill all the required details!")
            // }


            for (let i = 0; i < data.length; i++) {
                lis[i].innerText = data[i].value;
            }


        });

    </script>





    </script>
</body>

</html>
