// Listen for submit
document.querySelector('#zipform').addEventListener('submit', getLocationInfo);

function clearMessage() {
    document.querySelector('#output').innerHTML = '';
}

function getLocationInfo(e) {
    e.preventDefault();
    
    //Get zip value from input
    const zip = document.querySelector('.zip').value;

    // Make Request
    fetch(`http://api.zippopotam.us/us/${zip}`)
        .then(response => {
            if (response.status != 200) {
                document.querySelector('#output').innerHTML = 
                `
                   <article class="message is-danger">
                    <div class="message-body">Invalid ZipCode. Please try again.</div>
                   </article>   
                `;
                // TimeOut Message
                setTimeout(clearMessage, 4000);
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));

}