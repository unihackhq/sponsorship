function checkedAddons() {
    var selectedInputs = document.querySelectorAll('#addons :checked');

    var items = [];
    for (var i = 0; i < selectedInputs.length; i++) {
        items.push(selectedInputs[i].value);
    }

    return items;
}

function selectedTier() {
    var selectedInput = document.querySelector('#tiers :checked');
    return selectedInput ? selectedInput.value : null;
}

function enquireButtonClicked() {
    var addons = checkedAddons();
    var tier = selectedTier();

    if (!tier) {
        alert("Please select a tier");
        return;
    }

    var link = 'mailto:sponsorship@melbourne.unihack.net?subject=Sponsorship Enquiry&Body=' + tier + '%0D%0A' + addons.join(', ');

    window.location = link;
}

function addEventListeners() {
    document.getElementById('enquireButton').addEventListener('click', enquireButtonClicked);
}

document.addEventListener("DOMContentLoaded", addEventListeners);
