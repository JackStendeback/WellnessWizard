const createHydration = async function(event) {
    event.preventDefault();
    const totalDailyWater = document.querySelector('input[name="totalDailyWater"]').value;
    const targetDailyWater = document.querySelector('input[name="targetDailyWater"]').value;;
    await fetch(`/api/hydration`, {
        method: 'POST',
        body: JSON.stringify({
            totalDailyWater,
            targetDailyWater
        }),
        headers: { 'Content-Type': 'application/json' },
    })
}
document.querySelector('#create-hydration').addEventListener('submit', createHydration);
