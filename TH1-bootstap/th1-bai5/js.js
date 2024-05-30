
  function showForm(){
    
    let modal = document.getElementById('addEmployeeModal');
 
    modal.style.display = 'block'
    
    $('#addEmployeeModal').this('show')
  }
  

  $(document).ready(function() {
    $('.btn-success').click(function(event) {
      event.preventDefault();
      addEmployee();

    });

    function addEmployee() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var address = document.getElementById('address').value;
        var phone = document.getElementById('phone').value;
    
        var tableBody = document.querySelector('tbody');
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>
                <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox6" name="options[]" value="1">
                    <label for="checkbox6"></label>
                </span>
            </td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${phone}</td>
            <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                        data-toggle="tooltip" title="Edit"><i class="fa-solid fa-pen text-warning"></i></i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                        data-toggle="tooltip" title="Delete"><i class="fa-solid fa-x text-danger"></i></i></a>
            </td>
        `;
        tableBody.appendChild(newRow);
    
        // Ẩn modal sau khi thêm nhân viên thành công
        $('#addEmployeeModal').modal('hide');
       
    }
  });

