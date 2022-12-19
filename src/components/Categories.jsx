import { Link } from "react-router-dom";
function Categories() {
  return (
    <div>
      <h1 className="flex justify-center text-lg font-bold">Our Services</h1>
      <div class="flex flex-row justify-center gap-10">
        <div>
          <h1 className="flex justify-center">Branding services</h1>
          <Link to="/branding" class="block">
            <img
              alt="Signage"
              src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=8"
              class="w-80 rounded-bl-2xl rounded-tr-2xl object-cover sm:h-72"
            />

            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Branding</strong>

              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

              <p class="mt-0.5 opacity-50 sm:mt-0">Branding services</p>
            </div>
          </Link>
        </div>
        <div>
          <h1 className="flex justify-center">Electrical supplies</h1>
          <Link to="/electrical" class="block">
            <img
              alt="Signage"
              src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              class="w-80 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
            />

            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Electrical</strong>

              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

              <p class="mt-0.5 opacity-50 sm:mt-0">Electrical Supplies</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Categories;
