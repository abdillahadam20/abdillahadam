<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mx-auto max-w-7xl space-y-6 sm:space-y-8">
                <div class="text-center">
                    <h2 class="text-base/7 font-semibold text-teal-500">Experience</h2>
                    <p
                        class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Professional Experience
                    </p>
                    <p class="mt-6 text-lg/8 text-gray-600">
                        With experience in web development, I have worked on various projects showcasing my skills in building responsive, functional, and visually appealing websites and applications. I focus on using the latest technologies to create web solutions that excel in both design and performance.
                    </p>
                </div>



                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    
                    <li class="mb-10 ms-6" v-for="item, index in exp" :key="index">
                        <span
                            class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
                            <Icon :name="item.icons" />
                        </span>
                        <h3 class="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">
                            {{ item.company }}
                        </h3>
                        <p class="mb-1.5 text-lg font-normal leading-none text-gray-900 dark:text-white">
                            {{ item.title }}
                        </p>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            {{ item.description }}
                        </p>
                    </li>

                    
                </ol>

                
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const exp = [
    {
     company: 'Freelance',
     icons: 'material-symbols:check-circle-outline',
     title: 'Front End Developer',
     description: 'As a freelance Front-End Developer, I work with clients to create visually appealing, responsive, and user-friendly websites and web applications. I specialize in using HTML, CSS, JavaScript, and frameworks like React and Vue.js to bring designs to life. I collaborate closely with clients to understand their needs, deliver custom solutions, and ensure seamless functionality across all devices. My goal is to provide high-quality, scalable web solutions that enhance the user experience and drive business success.',
    },
    {
     company: 'PT. Goto Gojek Tokopedia',
     icons: 'simple-icons:gojek',
     title: 'Compliance Support',
     description: 'As a Compliance Support, I assist in document filing, support the Compliance Manager, and help with reporting for systems like Silaras, SLIK, and Apolo. My role includes ensuring proper documentation is maintained, preparing reports, and contributing to the smooth operation of compliance activities within the organization.',
    },
    {
     company: 'PT. Privy Identitas Digital',
     icons: 'arcticons:privy',
     title: 'Front End Developer',
     description: 'As a Front-End Developer at Privy, I specialize in building and optimizing user interfaces using Nuxt.js. I collaborate closely with UI/UX teams to create seamless, responsive, and high-performing web applications. My work involves translating design concepts into interactive, dynamic interfaces, ensuring a smooth user experience. By leveraging the power of Nuxt.js alongside modern front-end technologies, I contribute to delivering a fast, scalable, and visually appealing digital experience.',
    },
    {
     company: 'PT. Sumber Bina Makmur',
     icons: 'material-symbols:check-circle-outline',
     title: 'Telemarketing Agent',
     description: "As a Telemarketing Agent for Hill's, I am responsible for promoting and selling high-quality pet food to veterinary clinics, pet stores, and other distributors. My role involves reaching out to potential clients, providing product information, handling inquiries, and ensuring customer satisfaction. I focus on building strong relationships, educating customers on the benefits of Hill's products, and driving sales to expand the brand's presence in the market.",
    },
    {
     company: 'PT. Shopee International Indonesia',
     icons: 'simple-icons:shopee',
     title: 'Customer Service Email',
     description: "As a Customer Service Email Support representative at Shopee, I assist customers by addressing inquiries, resolving issues, and providing timely solutions through email communication. My role involves handling product-related questions, order concerns, returns, and technical issues, ensuring a positive and efficient customer experience. I strive to provide clear and helpful responses, maintaining a high level of customer satisfaction and contributing to the overall success of the platform.",
    }
]

</script>

<style></style>
