import React, { useState } from "react";
import axios from "axios";
import "./HouseForm.css"; // Importing the CSS file

const HouseForm = () => {
  const [formData, setFormData] = useState({
    neighborhood: "",
    area: "",
    rooms: "",
    yearBuilt: "",
    floors: "",
    floorNumber: "",
    elevator: "",
    parking: "",
    propertyType: "",
    documentType: "",
    nearCenters: "",
    renovationStatus: "",
    flooringType: "",
    facadeType: "",
    extraAmenities: "",
  });

  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/HousePrediction", formData);
      setPredictedPrice(response.data.predictedPrice);
    } catch (error) {
      console.error("Error predicting the price:", error);
      setPredictedPrice("خطا در پیش‌بینی قیمت رخ داد");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        محله:
        <select name="neighborhood" onChange={handleChange} required>
          <option value="">انتخاب محله</option>
          <option value="امیرکبیر">امیرکبیر</option>
          <option value="حمزه‌کلا">حمزه‌کلا</option>
          <option value="کمربندی غربی">کمربندی غربی</option>
          <option value="میدان کشوری">میدان کشوری</option>
          <option value="شریعتی">شریعتی</option>
          <option value="قارن">قارن</option>
          <option value="درب دلاکان">درب دلاکان</option>
          <option value="چهارراه نواب">چهارراه نواب</option>
          <option value="کمربندی شرقی">کمربندی شرقی</option>
          <option value="کوی شهید بهشتی">کوی شهید بهشتی</option>
        </select>
      </label>

      <label>
        متراژ (متر مربع):
        <input type="number" name="area" onChange={handleChange} required />
      </label>

      <label>
        تعداد اتاق:
        <input type="number" name="rooms" onChange={handleChange} required />
      </label>

      <label>
        سال ساخت:
        <input type="number" name="yearBuilt" onChange={handleChange} required />
      </label>

      <label>
        تعداد طبقات:
        <input type="number" name="floors" onChange={handleChange} required />
      </label>

      <label>
        شماره طبقه:
        <input type="number" name="floorNumber" onChange={handleChange} required />
      </label>

      <label>
        آسانسور:
        <select name="elevator" onChange={handleChange} required>
          <option value="">انتخاب گزینه</option>
          <option value="Yes">دارد</option>
          <option value="No">ندارد</option>
        </select>
      </label>

      <label>
        پارکینگ:
        <select name="parking" onChange={handleChange} required>
          <option value="">انتخاب گزینه</option>
          <option value="Yes">دارد</option>
          <option value="No">ندارد</option>
        </select>
      </label>

      <label>
        نوع ملک:
        <select name="propertyType" onChange={handleChange} required>
          <option value="">انتخاب نوع ملک</option>
          <option value="Apartment">آپارتمان</option>
          <option value="Villa">ویلا</option>
        </select>
      </label>

      <label>
        نوع سند:
        <select name="documentType" onChange={handleChange} required>
          <option value="">انتخاب نوع سند</option>
          <option value="SingleDeed">تک‌برگ</option>
          <option value="Agreement">قولنامه‌ای</option>
          <option value="FullOwnership">شش‌دانگ</option>
        </select>
      </label>

      <label>
        نزدیکی به مراکز مهم:
        <select name="nearCenters" onChange={handleChange} required>
          <option value="">انتخاب مرکز مهم</option>
          <option value="School">مدرسه</option>
          <option value="ShoppingCenter">مرکز خرید</option>
          <option value="Hospital">بیمارستان</option>
          <option value="BusStation">ایستگاه اتوبوس</option>
          <option value="Park">پارک</option>
          <option value="Market">بازار</option>
          <option value="MainStreet">خیابان اصلی</option>
        </select>
      </label>

      <label>
        وضعیت بازسازی:
        <select name="renovationStatus" onChange={handleChange} required>
          <option value="">انتخاب وضعیت بازسازی</option>
          <option value="New">نوساز</option>
          <option value="Old">قدیمی</option>
          <option value="Renovated">بازسازی شده</option>
        </select>
      </label>

      <label>
        نوع کف‌پوش:
        <select name="flooringType" onChange={handleChange} required>
          <option value="">انتخاب نوع کف‌پوش</option>
          <option value="Ceramic">سرامیک</option>
          <option value="Parquet">پارکت</option>
          <option value="Stone">سنگ</option>
          <option value="Carpet">موکت</option>
        </select>
      </label>

      <label>
        نوع نما:
        <select name="facadeType" onChange={handleChange} required>
          <option value="">انتخاب نوع نما</option>
          <option value="Brick">آجر</option>
          <option value="Stone">سنگ</option>
          <option value="Cement">سیمان</option>
        </select>
      </label>

      <label>
        امکانات اضافی:
        <select name="extraAmenities" onChange={handleChange} required>
          <option value="">انتخاب امکانات اضافی</option>
          <option value="None">هیچ</option>
          <option value="Pool">استخر</option>
          <option value="Jacuzzi">جکوزی</option>
          <option value="Sauna">سونا</option>
        </select>
      </label>

      <button type="submit">پیش‌بینی قیمت</button>

      {predictedPrice && <h2>قیمت پیش‌بینی‌شده: {predictedPrice}</h2>}
    </form>
  );
};

export default HouseForm;
