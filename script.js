
        // قائمة المنتجات
        const products = [
            { id: 1, name: "نعناع", price: 10, description: "عشب طبيعي منعش ومثالي لمشروبات الصيف.", image: "https://via.placeholder.com/300x200?text=نعناع" },
            { id: 2, name: "بابونج", price: 15, description: "يساعد على تهدئة الأعصاب وتحسين النوم.", image: "https://via.placeholder.com/300x200?text=بابونج" },
            { id: 3, name: "زنجبيل", price: 20, description: "يحسن الهضم ويعزز جهاز المناعة.", image: "https://via.placeholder.com/300x200?text=زنجبيل" },
            { id: 4, name: "زعتر", price: 12, description: "مفيد للهضم ولإضافة نكهة إلى طعامك.", image: "https://via.placeholder.com/300x200?text=زعتر" },
            { id: 5, name: "كركديه", price: 18, description: "يساعد على ضبط ضغط الدم.", image: "https://via.placeholder.com/300x200?text=كركديه" },
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
