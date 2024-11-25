
        // قائمة المنتجات
    { id: 1, name: "نعناع", price: 2500, description: "يساعد في تهدئة المعدة، يحسن الهضم، يخفف التوتر، ويعزز التنفس.", image: "https://via.placeholder.com/300x200?text=نعناع" },
    { id: 2, name: "بابونج", price: 3250, description: "يحسن النوم، يخفف التوتر، مضاد للالتهابات، ويحسن الهضم.", image: "https://via.placeholder.com/300x200?text=بابونج" },
    { id: 3, name: "زنجبيل", price: 4000, description: "يحسن الهضم، يعزز المناعة، مضاد للالتهابات، يخفف الغثيان.", image: "https://via.placeholder.com/300x200?text=زنجبيل" },
    { id: 4, name: "Cat Nip", price: 2750, description: "منتج طبيعي محبوب للقطط، يعزز نشاطها وسعادتها.", image: "https://via.placeholder.com/300x200?text=Cat+Nip" },
    { id: 5, name: "كركديه", price: 4500, description: "يساعد على ضبط ضغط الدم.", image: "https://via.placeholder.com/300x200?text=كركديه" },
    { id: 6, name: "شاي أخضر", price: 5000, description: "يعزز الحرق ويساعد على الاسترخاء.", image: "https://via.placeholder.com/300x200?text=شاي+أخضر" },
    { id: 7, name: "مرامية", price: 3500, description: "مفيد لصحة الجهاز الهضمي والجهاز التنفسي.", image: "https://via.placeholder.com/300x200?text=مرامية" },
    { id: 8, name: "قرفة", price: 4750, description: "ممتازة للتحكم في مستويات السكر في الدم.", image: "https://via.placeholder.com/300x200?text=قرفة" },
    { id: 9, name: "شمر", price: 3250, description: "يساعد على الهضم ويخفف التوتر.", image: "https://via.placeholder.com/300x200?text=شمر" },
    { id: 10, name: "زعتر", price: 4000, description: "مفيد للصحة العامة ويعزز مناعة الجسم.", image: "https://via.placeholder.com/300x200?text=زعتر" },
    { id: 11, name: "نعناع", price: 3000, description: "عشب طبيعي منعش ومثالي لمشروبات الصيف.", image: "https://via.placeholder.com/300x200?text=نعناع" },
    { id: 12, name: "بابونج", price: 3750, description: "يساعد على تهدئة الأعصاب وتحسين النوم.", image: "https://via.placeholder.com/300x200?text=بابونج" },
    { id: 13, name: "زنجبيل", price: 4500, description: "يحسن الهضم ويعزز جهاز المناعة.", image: "https://via.placeholder.com/300x200?text=زنجبيل" },
    { id: 14, name: "كركم", price: 5000, description: "مضاد للالتهابات ويعزز المناعة.", image: "https://via.placeholder.com/300x200?text=كركم" },
    { id: 15, name: "يانسون", price: 3000, description: "يساعد على تهدئة المعدة وتحسين النوم.", image: "https://via.placeholder.com/300x200?text=يانسون" }
];


        // تحديد عنصر قائمة المنتجات
        const productList = document.getElementById('product-list');

        // عرض المنتجات ديناميكيًا
        products.forEach(product => {
            const productCard = `
                <div class="col-md-4">
                    <div class="card shadow">
                        <img src="${product.image}" alt="${product.name}" class="card-img-top product-img">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="text-success fw-bold">السعر: ${product.price} د</p>
                            <button class="btn btn-primary" onclick="showProductDetails(${product.id})">عرض التفاصيل</button>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += productCard;
        });

        // وظيفة عرض التفاصيل
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                alert(`المنتج: ${product.name}\nالوصف: ${product.description}\nالسعر: ${product.price} ر.س`);
            }
        }
