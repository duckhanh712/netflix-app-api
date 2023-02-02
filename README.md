## Config Auth0
#### 1.  Tạo tài khoản Auth0  [https://auth0.com/](https://auth0.com/)
#### 2. Đăng nhập vào trang quản trị  [https://manage.auth0.com/](https://manage.auth0.com/) (Application)  Single Page Web Applications
- Mặc định Auth0 cho phép đăng nhập bằng `email + password`
- Cho phép đăng nhập bằng `username + password`:
	**[Dashboard](https://manage.auth0.com/dashboard/)**  -> chọn   `Authentication` -> chọn `Database`
	Chọn DB setting -> bật flag `Requires Username` 
-   Tạo tài khoản cho user: 
	**[Dashboard](https://manage.auth0.com/dashboard/)**  -> chọn   `User Management` -> chọn `Users` -> Chọn `+ Create User` -> Nhập thông tin user: email, password, username và Database Connections
-   Custom login Form:
	 **[Dashboard](https://manage.auth0.com/dashboard/)**  -> chọn   `Branding` -> chọn `Universal Login`
	-  Customization Options: Tuỳ chỉnh colors, fonts, border...
	-  Advanced Options: Tuỳ chỉnh, ghi đè HTML ...
	
#### 3. Config nuxt
-  `yarn add @auth0/auth0-vue` or `npm install @auth0/auth0-vue`
- Tạo plugins: 
	Tạo file `auth0.ts`

   ```
   plugins/
     |- auth0.ts
     ```

	```typescript
	    import { createAuth0 } from  '@auth0/auth0-vue'
	    export  default  defineNuxtPlugin((nuxtApp) => {
		    	nuxtApp.vueApp.use(
		    	createAuth0({
		    	domain:  'your-domain-auth0',
		    	clientId:  'your-clientID',
		    	authorizationParams: {
		    	redirect_uri:  window.location.origin
		    	}
		    }))
	    })
	```
  - Lấy Domain, ClientId:
**[Dashboard](https://manage.auth0.com/dashboard/)**  -> chọn   `Appllications` -> chọn `Appllications` -> chọn dự án cần làm -> chọn setting

-   Tạo login page
	- Tạo file `auth0.ts`

	   ```
	   plugins/
	     |- auth0.ts
	     ```
	     ```typescript
	    <template>
			<div>
				<button @click="login">Log in</button>
			</div>
		</template>
		<script>
		import { useAuth0 } from  '@auth0/auth0-vue'

		export  default {
			setup() {
				const auth0 = useAuth0()
					return {
						login() {
							auth0.loginWithRedirect()
						}
					}
				}
		}
		</script>
		```

-   Tạo login page
	- Tạo file `auth0.ts`

	   ```
	   plugins/
	     |- auth0.ts
	     ```
	     ```typescript
	    <template>
			<div>
				<button @click="login">Log in</button>
			</div>
		</template>
		<script>
		import { useAuth0 } from  '@auth0/auth0-vue'

		export  default {
			setup() {
				const auth0 = useAuth0()
					return {
						logout() {
							auth0.logout({
								logoutParams: {
									returnTo:  window.location.origin
							}
						})
					}
			}
		}
		</script>
		```


