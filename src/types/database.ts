export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          email: string;
          message: string;
        };

        Insert: {
          id?: number;
          created_at?: string;
          name: string;
          email: string;
          message: string;
        };

        Update: {
          id?: number;
          created_at?: string;
          name?: string;
          email?: string;
          message?: string;
        };

        Relationships: [];
      };
    };

    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
