<template>
    <div class="page-content">
        <div class="wrapper">
            <div class="page-title">
                <h1 class="title">Profile</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi harum facere nulla nam at iste iusto saepe sapiente eos illum amet, consectetur doloribus consequuntur tempora cumque quas laborum magnam repellat.</p>

            <div class="slider-container">
                <div class="slide">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea soluta consequuntur, accusantium magnam praesentium dolor quis eligendi veniam sapiente voluptas dolorum natus perferendis ullam neque molestiae non delectus eos!</div>
                <div class="slide">2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea soluta consequuntur, accusantium magnam praesentium dolor quis eligendi veniam sapiente voluptas dolorum natus perferendis ullam neque molestiae non delectus eos!</div>
                <div class="slide">3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea soluta consequuntur, accusantium magnam praesentium dolor quis eligendi veniam sapiente voluptas dolorum natus perferendis ullam neque molestiae non delectus eos!</div>
                <div class="slide">4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea soluta consequuntur, accusantium magnam praesentium dolor quis eligendi veniam sapiente voluptas dolorum natus perferendis ullam neque molestiae non delectus eos!</div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                
            }
        },
        created: function () {

        },
        mounted: function () {
            $('.slider-container').slick();
        }
    }
</script>
