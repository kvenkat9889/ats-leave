/ Initialize local storage if empty
if (!localStorage.getItem('leaveRequests')) {
    localStorage.setItem('leaveRequests', JSON.stringify([]));
}

// Submit leave request (for employee)
function submitLeave() {
    const empName = document.getElementById('empName').value;
    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;

    // Check if all fields are filled out
    if (!empName || !leaveType || !startDate || !endDate || !reason) {
        alert('Please fill all fields');
        return;
    }

    // Create leave request object
    const leaveRequest = {
        id: Date.now(),
        empName,
        leaveType,
        startDate,
        endDate,
        reason,
        status: 'pending',
        submittedDate: new Date().toLocaleDateString() // Backticks start here: `${new Date().toLocaleDateString()}` // Backticks end here
    };

    // Store leave request in local storage
    const requests = JSON.parse(localStorage.getItem('leaveRequests'));
    requests.push(leaveRequest);
    localStorage.setItem('leaveRequests', JSON.stringify(requests)); // Backticks are not used here, as it's a standard string

    alert('Leave request submitted successfully!');
    clearForm();
}

// Clear form (for employee)
function clearForm() {
    document.getElementById('empName').value = '';
    document.getElementById('leaveType').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('reason').value = '';
}
