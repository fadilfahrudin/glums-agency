import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
    settings: {
        id: number
        pt_name: string
        pt_address: string
        logo_website_path: string
        video_profile_path: string
        marquee: string
        copy_right: string
        about_desc: string
        team_member_desc: string
        what_we_do_desc: string
    }
}

const initialState : SettingsState = {
    settings:{
        id: 0,
        pt_name: '',
        pt_address: '',
        logo_website_path: '',
        video_profile_path: '',
        marquee: '',
        copy_right: '',
        about_desc: '',
        team_member_desc: '',
        what_we_do_desc: '',
    }
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSettings: (state, action: PayloadAction<SettingsState>) => {
            state.settings = {
                ...state.settings,
                ...action.payload
            }
        }
    }
})

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;